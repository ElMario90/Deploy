const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/process', (req, res) => {
    const numbers = req.body;
    if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = numbers.reduce((sum, num) => sum + num, 0); // Example: Sum of array
    res.json({ result });
});

// Optionally, add a basic route to check server status
app.get('/', (req, res) => {
    res.send('Service is running');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
