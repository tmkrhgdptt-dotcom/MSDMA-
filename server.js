const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>MSDMA MVP est en ligne !</h1>');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'MSDMA fonctionne' });
});

app.listen(PORT, () => {
  console.log('Serveur sur port ' + PORT);
});
