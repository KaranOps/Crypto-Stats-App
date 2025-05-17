const express = require('express');
const router = express.Router();
const cryptoStat = require('../models/cryptoStat');
const math = require('mathjs');

router.get('/deviation', async (req,res) =>{
  const coin = req.query.coin;

  if(!coin){
    return res.status(400).send(" Please provide a valid coin name");
  }

  try {
    const stats = await cryptoStat.find({coin})
    .sort({createdAt: -1})
    .limit(10);

    if(stats.length===0){
      return res.status(404).send("No data found for this coin");
    }

    const prices = stats.map(stat => stat.price);
    const deviation = math.std(prices).toFixed(2);

    res.json({ deviation: Number(deviation)});
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send(" Failed to fetch data");
  }
});

module.exports = router;
