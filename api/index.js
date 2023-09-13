const { fetchData, getSingleGame } = require("./src/fetchData");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  //ruta : https:localhost:3000/
  const data = await fetchData();

  return res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`servido iniciado correctamente en puerto ${PORT}`);
});
