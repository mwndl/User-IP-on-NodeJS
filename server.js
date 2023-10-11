const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ips = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // const clientIP = ips.split(',')[0].trim();
  const clientIP = ips.split(',').map(ip => ip.trim()).join(', ');
  res.send(`Client IP: ${clientIP}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
