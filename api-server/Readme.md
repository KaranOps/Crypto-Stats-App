# API Server - Crypto Stats App

## Overview

This API server exposes endpoints to fetch and store cryptocurrency statistics.  
It connects to MongoDB and communicates via NATS for inter-server messaging.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (Atlas or local)
- NATS server running (`docker run -p 4222:4222 nats`)

## Setup & Installation

1. Clone the repo and navigate to the `worker-server` folder:

   ```bash
   cd api-server

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

