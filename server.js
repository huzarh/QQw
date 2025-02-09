const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post("http://localhost:11500/api/generate", {
            model: "deepseek-r1:7b",
            prompt: message,
        });

        res.json({ reply: response.data.response });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to communicate with Ollama." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
