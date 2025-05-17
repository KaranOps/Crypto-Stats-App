require('dotenv').config();

const {connect} = require('nats')
const cron = require('node-cron');

const startWorker = async () => {
    const nc = await connect({ servers: process.env.NATS_URL });

    if (process.env.NODE_ENV !== 'production');

    cron.schedule('*/15 * * * *', ()=>{
        const message = JSON.stringify({
            trigger: "update"
        })

        nc.publish("crypto.update", new TextEncoder().encode(message));
    });
} 
startWorker().catch(console.error);