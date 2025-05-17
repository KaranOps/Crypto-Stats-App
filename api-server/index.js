require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./config/db');
const storeCryptoStats = require('./utils/crypto');
const connectNats = require('./nats');
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello MongoDB Atlas");
});

app.get("/store", async (req, res) => {
  try {
    await storeCryptoStats();
    res.send("Crypto stats stored");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to store stats");
  }
});

app.use("/", require('./routes/statsRoutes'));
app.use("/", require('./routes/deviationRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));