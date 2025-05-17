const axios = require('axios');
const cryptoStat = require('../models/cryptoStat');

const storeCryptoStats = async () => {
    try {
        const url = 'https://api.coingecko.com/api/v3/coins/markets';
        const params = {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,matic-network'
        }

        const response = await axios.get(url, { params })
        const coins = response.data;

        for (const coin of coins) {

            const newStat = new cryptoStat({
                coin: coin.id,
                price: coin.current_price,
                marketCap: coin.market_cap,
                change24th: coin.price_change_percentage_24h
            })
            await newStat.save();
        }
} catch (error) {
    console.error("Failed to fetch/save data", error.message);

}
}

module.exports = {storeCryptoStats};