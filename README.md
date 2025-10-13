# 🧠 YOLO App — Dockerized MERN Application

## 📋 Overview

YOLO App is a full-stack MERN (MongoDB, Express, React, Node.js) application deployed as microservices using Docker and Docker Compose.
The project demonstrates DevOps containerization principles by separating the frontend, backend, and database into independent, interconnected services.

---

## 🧩 Project Structure

```
yolo/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── client/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── docker-compose.yaml
├── .dockerignore
└── README.md
```

---

## ⚙️ Tech Stack

| Layer            | Technology                  |
| ---------------- | --------------------------- |
| Frontend         | React.js (served via Nginx) |
| Backend          | Node.js + Express           |
| Database         | MongoDB                     |
| Containerization | Docker & Docker Compose     |

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/h1baq/yolo.git
cd yolo
```

### 2️⃣ Build and Run with Docker Compose

```bash
docker-compose up --build
```

This builds the Docker images for the frontend (`yolo-client`) and backend (`yolo-backend`), starts MongoDB, and connects all containers through a shared bridge network.

---

## 🌐 Service URLs

| Service  | Container    | Port                                           |
| -------- | ------------ | ---------------------------------------------- |
| Frontend | yolo-client  | [http://localhost:3000](http://localhost:3000) |
| Backend  | yolo-backend | [http://localhost:5000](http://localhost:5000) |
| Database | mongo        | Port 27017                                     |

---

## 🐳 Docker Images

| Component | Docker Image       | Version | Docker Hub                                                                        |
| --------- | ------------------ | ------- | --------------------------------------------------------------------------------- |
| Frontend  | h1baq/yolo-client  | v1.0.0  | [View on Docker Hub](https://hub.docker.com/repository/docker/h1baq/yolo-client)  |
| Backend   | h1baq/yolo-backend | v1.0.0  | [View on Docker Hub](https://hub.docker.com/repository/docker/h1baq/yolo-backend) |

---

## 🧪 Testing Locally

After running `docker-compose up`, verify containers:

```bash
docker ps
```

Then open:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## 🧰 Useful Commands

| Command                                 | Description                    |
| --------------------------------------- | ------------------------------ |
| `docker-compose up --build`             | Build and start all containers |
| `docker-compose down`                   | Stop and remove containers     |
| `docker images`                         | List all images                |
| `docker push h1baq/yolo-client:v1.0.0`  | Push frontend image            |
| `docker push h1baq/yolo-backend:v1.0.0` | Push backend image             |

---

## 🏗️ Networking

A custom Docker bridge network (`app-net`) connects:

* React frontend
* Node/Express backend
* MongoDB database

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

**Hibaq Adan (h1baq)**
📧 [hibaqku7@gmail.com](mailto:hibaqku7@gmail.com)
