const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`IP do Cliente: ${clientIP}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
