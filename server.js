const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ips = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const clientIP = ips.split(',')[0].trim(); // Pega o primeiro IP da lista
  res.send(`IP do Cliente: ${clientIP}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
