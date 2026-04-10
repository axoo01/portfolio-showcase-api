# Portfolio Showcase API 

A centralized Portfolio Management API built with **TypeScript** and **Node.js**. This project demonstrates Agile methodologies and DevOps practices, featuring a fully automated CI/CD pipeline.

## Features
- **Project Listing:** Retrieve a list of developer projects via `/projects`.
- **Live Status Monitoring:** Real-time HTTP probing to verify if project links are "Online" or "Offline".
- **System Health:** Detailed health metrics including uptime and memory usage via `/health`.
- **Request Logging:** Built-in terminal monitoring for tracking API interactions.

## Tech Stack
- **Language:** TypeScript
- **Runtime:** Node.js (v20+)
- **Testing:** Jest
- **DevOps:** GitHub Actions (CI/CD)
- **Process:** Nodemon for hot-reloading

## Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v20 or higher recommended).

### 2. Installation
```bash
# Clone the repository
git clone <REPO_LINK>

# Enter the directory
cd portfolio-showcase-api

# Install dependencies
npm install