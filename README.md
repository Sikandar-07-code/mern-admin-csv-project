# MERN Admin Dashboard – CSV Upload & Agent Lead Distribution

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows an admin to:

- Securely log in
- Upload a `.csv` file with leads
- Distribute leads among 5 agents automatically
- View leads assigned to each agent
- Download agent-specific leads as CSV

---

## 🔧 Features

- 🔐 JWT-based Admin Authentication
- 📤 File Upload (.csv, .xls, .xlsx)
- 📊 Equal lead distribution to agents
- 👥 Agent management
- 📁 Download leads per agent
- ⚙️ Clean, tested REST APIs (Postman tested)
- 💻 React frontend with simple UI

---

## 🛠 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **Authentication:** JWT
- **CSV Handling:** `multer`, `csv-parser`
- **Other:** Axios, dotenv, cors

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/Sikandar-07-code/mern-admin-csv-project.git
cd mern-admin-csv-project
