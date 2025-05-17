const express = require('express');
const router = express.Router();
const cryptoStat = require('../models/cryptoStat');

router.get('/stats', async (req,res) =>{
  const coin = req.query.coin;
  if(!coin){
    return res.status(400).send("Please provide a valid coin name");
  }

  try {
    const latestData = await cryptoStat.findOne({coin}).sort({createdAt: -1});
    if (!latestData) {
      return res.status(404).send("No data found for the specified coin");
    }

    res.json({
      price: latestData.price,
      marketCap : latestData.marketCap,
      '24hChange' : latestData.change24th
    });
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Failed to fetch data");
  }
});

module.exports = router;
