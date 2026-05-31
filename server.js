const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
