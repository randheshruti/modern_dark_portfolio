const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Step 2: Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Step 3: API endpoint returning JSON
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from Express API!" });
});

// Step 4: Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});