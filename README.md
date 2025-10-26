# YOLO App — Dockerized MERN Application (Ansible Deployment)

## 📋 Overview

YOLO App is a full-stack MERN (MongoDB, Express, React, Node.js) application deployed as **microservices** using **Docker** and **Ansible**.

---

## Project Structure

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
├── roles/
│   ├── network/
│   ├── mongodb/
│   ├── backend/
│   └── frontend/
├── playbook.yml
├── inventory.yml
└── README.md
```

---

## ⚙️ Tech Stack

| Layer            | Technology                  |
| ---------------- | --------------------------- |
| Frontend         | React.js (served via Nginx) |
| Backend          | Node.js + Express           |
| Database         | MongoDB                     |
| Containerization | Docker                      |
| Orchestration    | Ansible                     |

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/h1baq/yolo.git
cd yolo
```

### 2️⃣ Spin up the VM (if using Vagrant)

```bash
vagrant up
vagrant ssh
```

### 3️⃣ Deploy the Application with Ansible

```bash
ansible-playbook -i inventory.yml playbook.yml
```

This playbook will:

* Create Docker network `app-net`
* Launch MongoDB container
* Launch backend container
* Launch frontend container

---

| Service  | Container    | Port                             |
| -------- | ------------ | -------------------------------- |
| Frontend | yolo-client  | [http://10.0.2.15:3000](http://10.0.2.15:3000) |
| Backend  | yolo-backend | [http://10.0.2.15:5000](http://10.0.2.15:5000) |
| Database | mongo        | Port 27017                       |

---

## 🐳 Docker Images

| Component | Docker Image       | Version | Docker Hub                                                                        |
| --------- | ------------------ | ------- | --------------------------------------------------------------------------------- |
| Frontend  | h1baq/yolo-client  | v1.0.0  | [View on Docker Hub](https://hub.docker.com/repository/docker/h1baq/yolo-client)  |
| Backend   | h1baq/yolo-backend | v1.0.0  | [View on Docker Hub](https://hub.docker.com/repository/docker/h1baq/yolo-backend) |

---

## 🧪 Verification

After running the playbook, verify the containers:

```bash
docker ps -a
```

Expected output:

| Container Name | Image                     | Status | Ports       |
| -------------- | ------------------------- | ------ | ----------- |
| mongo          | mongo:6                   | Up     | 27017:27017 |
| yolo-backend   | h1baq/yolo-backend:v1.0.0 | Up     | 5000:5000   |
| yolo-client    | h1baq/yolo-client:v1.0.0  | Up     | 3000:80     |

---

## 🧰 Useful Commands

| Command                                          | Description                       |
| ------------------------------------------------ | --------------------------------- |
| `ansible-playbook -i inventory.yml playbook.yml` | Deploy all containers via Ansible |
| `docker ps -a`                                   | List all containers               |
| `docker logs <container>`                        | Check logs of a container         |
| `docker rm -f <container>`                       | Remove a container                |
| `docker network ls`                              | List all Docker networks          |

---

## 🏗️ Networking

All containers are connected using a **custom Docker bridge network** (`app-net`) for internal communication.

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

**Hibaq Adan (h1baq)**
📧 [hibaqku7@gmail.com](mailto:hibaqku7@gmail.com)

---


