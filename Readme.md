# Crypto Stats App

Welcome to the **Crypto Stats App** — a real-time cryptocurrency stats tracking system featuring a microservices architecture with **NATS** event communication and **MongoDB** for data storage.

---

## Project Overview

This project demonstrates a robust, scalable backend setup for:

- Periodic data fetching and storage of cryptocurrency statistics.
- Event-driven communication between API and worker servers via **NATS** messaging.
- RESTful APIs to access latest crypto stats and calculate deviation over recent data.
- Clean, maintainable folder structure with separation of concerns.
- Background jobs running every 15 minutes to update data seamlessly.

---

## Folder Structure

```plaintext
/crypto-stats-app
├── /api-server        # REST API server (Express.js)
├── /worker-server     # Background worker server (fetches & publishes data)
├── README.md          # Root project documentation
````

* **api-server:** Handles client requests, communicates with MongoDB, and listens to NATS events.
* **worker-server:** Runs scheduled jobs to fetch crypto data and publishes update events on NATS.

---

## Features

* **Scheduled data fetching** every 15 minutes using cron jobs.
* **Event-driven communication** using NATS — lightweight and fast messaging system.
* **MongoDB storage** with properly structured schemas.
* **REST APIs**:

  * `/stats?coin=bitcoin` - Returns latest price, market cap, 24h change.
  * `/deviation?coin=bitcoin` - Returns standard deviation of last 10 prices.
* Clear error handling and validation.
* Well-organized codebase following best practices.

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/crypto-stats-app.git
cd crypto-stats-app
```

2. **Configure Environment Variables**

Create `.env` files inside both `/api-server` and `/worker-server` with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
NATS_URL=nats://localhost:4222
```

3. **Install Dependencies**

```bash
cd api-server
npm install

cd ../worker-server
npm install
```

4. **Start NATS Server**

Make sure Docker is installed and running, then:

```bash
docker run -p 4222:4222 nats
```

Alternatively, install NATS locally from [nats.io](https://nats.io/download/).

5. **Run Servers**

In separate terminals:

```bash
cd api-server
npm start
```

```bash
cd worker-server
npm start
```

---

## How to Use

* Access API endpoints:

  * Get latest stats:
    `GET http://localhost:3000/stats?coin=bitcoin`

  * Get price deviation:
    `GET http://localhost:3000/deviation?coin=bitcoin`

* Worker server automatically fetches and publishes updates every 15 minutes.

---

## Tech Stack

* **Node.js & Express.js** — API and worker servers
* **MongoDB & Mongoose** — Database & schema modeling
* **NATS** — Event messaging and inter-service communication
* **cron** — Scheduled background tasks
* **Docker** — Containerized NATS server (optional)

---

<!-- ## Why This Project?

This project showcases your ability to:

* Build scalable microservice-based backend architectures.
* Implement event-driven communication for loosely coupled systems.
* Handle asynchronous tasks and cron scheduling.
* Write clean, modular, and maintainable code.
* Integrate multiple tools (MongoDB, NATS, Docker) in a real-world scenario.

--- -->



*Created by Karan Kumar*
[LinkedIn](https://www.linkedin.com/in/karan899/) | [GitHub](https://github.com/KaranOps)



