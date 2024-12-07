const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.post('/api/getProducts', async (req, res) => {
  try {
    const apiUrl = 'https://node-store-api-smvy.onrender.com/getProducts'; 
    
    const body = {
      partnerCode: "NPCPONTOFRIO"
    };

    const response = await axios.post(apiUrl, body, { headers: { 'Content-Type': 'application/json' } });
    res.json(response.data);

  } catch (error) {
    console.error('Erro ao pegar dados da API', error);
    res.status(500).send('Erro ao pegar dados da API');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
