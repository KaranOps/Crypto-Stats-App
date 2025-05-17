const { connect } = require("nats");
const { storeCryptoStats } = require("../utils/crypto.js");

const listenToNats = async () => {
    const nc = await connect({ servers: process.env.NATS_URL });

    const sub = nc.subscribe("crypto.update");
    for await (const msg of sub) {
        await storeCryptoStats();
    }
}

listenToNats().catch(console.error);