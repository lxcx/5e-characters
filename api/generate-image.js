// Vercel Serverless Function - Prodia Image Generation Proxy
// This keeps the API key secure on the server side

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.PRODIA_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const { prompt, width = 512, height = 512 } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Create job with Prodia
        const createResponse = await fetch('https://inference.prodia.com/v2/job', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'inference.flux.schnell.txt2img.v1',
                config: {
                    prompt: prompt,
                    style_preset: 'fantasy-art',
                    width: width,
                    height: height,
                    steps: 4
                }
            })
        });

        if (!createResponse.ok) {
            const errorText = await createResponse.text();
            console.error('Prodia create error:', errorText);
            return res.status(createResponse.status).json({ error: 'Failed to create image job' });
        }

        const job = await createResponse.json();
        const jobId = job.job;

        // Poll for completion (max 30 seconds)
        const maxAttempts = 30;
        let attempts = 0;
        
        while (attempts < maxAttempts) {
            const statusResponse = await fetch(`https://inference.prodia.com/v2/job/${jobId}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            if (!statusResponse.ok) {
                return res.status(500).json({ error: 'Failed to check job status' });
            }

            const status = await statusResponse.json();

            if (status.status === 'succeeded') {
                return res.status(200).json({ 
                    success: true, 
                    imageUrl: status.imageUrl 
                });
            }

            if (status.status === 'failed') {
                return res.status(500).json({ error: 'Image generation failed' });
            }

            // Wait 1 second before next poll
            await new Promise(resolve => setTimeout(resolve, 1000));
            attempts++;
        }

        return res.status(408).json({ error: 'Image generation timed out' });

    } catch (error) {
        console.error('Prodia API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
