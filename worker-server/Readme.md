# Worker Server

This is the worker server for the Crypto Stats app. It connects to the NATS messaging system and listens for events to process background tasks such as fetching and storing crypto stats.

## Prerequisites

- Node.js (v14 or higher recommended)
- NPM (comes with Node.js)
- NATS Server running locally or accessible remotely
- MongoDB connection URI

## Setup & Installation

1. Clone the repo and navigate to the `worker-server` folder:

   ```bash
   cd worker-server

2. Install Dependencies

    ```bash
    npm install

3. Create a .env file in the root of the worker-server folder and add your environment variables:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    NATS_URL=nats://localhost:4222

5. Start the worker server:
    ```bash
    node index.js