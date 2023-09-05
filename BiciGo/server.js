const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const cors = require('cors'); // Importa el middleware cors

app.use(cors());
app.get('/direccion', async (req, res) => {
    const direccion = req.query.direccion; 
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`;
    try {
      const response = await axios.get(apiUrl);
      if (response.data && response.data.length > 0) {
        const coordenadas = {
          lat: response.data[0].lat,
          lng: response.data[0].lon
        };
        res.json({ coordenadas });
      } else {
        res.status(404).json({ error: 'Coordenadas no encontradas para la dirección proporcionada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocurrió un error' });
    }
  

});

app.listen(port, () => {
console.log(`Servidor escuchando en el puerto ${port}`);
});
