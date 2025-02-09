export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'deepseek-coder:7b',
                prompt: message,
                stream: false,
            }),
        });

        const data = await response.json();
        return res.status(200).json({ reply: data.response });
    } catch (error) {
        return res.status(500).json({ message: 'Error generating response' });
    }
}
