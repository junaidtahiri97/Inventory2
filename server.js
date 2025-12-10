const express = require('express');
const path = require('path');

const app = express();

// Serve all files in frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Redirect root to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
