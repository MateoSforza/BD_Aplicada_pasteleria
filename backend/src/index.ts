import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Pastelería funcionando');
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en puerto ${port}`);
});
