import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { image } = req.body; // Get image data from the request
            const response = await axios.post(
                'https://api.lightxeditor.com/external/api/v1/remove-background',
                { image },
                {
                    headers: {
                        'Authorization': `Bearer YOUR_LIGHTX_API_KEY`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            res.status(200).json(response.data); // Send back LightX API response
        } catch (error) {
            res.status(500).json({ error: 'Failed to remove background' });
        }
    } else {
        res.status(405).json({ message: 'Only POST requests allowed' });
    }
}
