// Vercel Serverless Function - Prodia Image Generation Proxy
// This keeps the API key secure on the server side

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.PRODIA_API_KEY;
    if (!apiKey) {
        console.error('PRODIA_API_KEY not set');
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const { prompt, width = 512, height = 512 } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Call Prodia API - request image directly with Accept header
        const response = await fetch('https://inference.prodia.com/v2/job', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'image/jpeg'
            },
            body: JSON.stringify({
                type: 'inference.flux-fast.schnell.txt2img.v2',
                config: {
                    prompt: prompt,
                    width: width,
                    height: height
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Prodia error:', response.status, errorText);
            return res.status(response.status).json({ error: 'Image generation failed', details: errorText });
        }

        // Get image as buffer and convert to base64 data URL
        const imageBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(imageBuffer).toString('base64');
        
        return res.status(200).json({
            success: true,
            imageUrl: `data:image/jpeg;base64,${base64}`
        });

    } catch (error) {
        console.error('Prodia API error:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
