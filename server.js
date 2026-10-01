const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send(`<h1>MSDMA MVP est en ligne !</h1><p>Serveur Guineen - Souleymane</p><p><a href="/api/status">Voir API</a></p>`);
});
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'MSDMA MVP fonctionne', owner: 'Souleymane - Conakry' });
});
app.listen(PORT, () => { console.log('Serveur sur port ' + PORT); }
