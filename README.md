# MERN Admin CSV Project 📊

A simple MERN stack dashboard that allows an admin to:

- ✅ Log in securely (JWT authentication)
- 📤 Upload a CSV file of leads
- 👥 Distribute leads to agents
- 📋 View agent-wise leads
- 📁 Export leads assigned to each agent

---

## 🚀 Tech Stack

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Token)
- **File Handling**: Multer (CSV Upload)

---

## ⚙️ Setup Instructions

### 📁 Clone the repo

```bash
git clone https://github.com/Sikandar-07-code/mern-admin-csv-project.git
cd mern-admin-csv-project
```

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
```

Run backend:

```bash
node server.js
```

---

### 💻 Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🔐 Admin Login

Use the following credentials to log in (default seeded user):

```text
Email: admin@example.com
Password: admin123
```

---

## 📦 Features

- Upload CSV leads
- Auto-distribute leads to agents
- View agent-wise leads
- Export/download leads per agent
- Protected upload route via JWT
- Clean dashboard UI

---

## 📽️ Demo Video

> 🎥 Upload your 3-minute walkthrough to YouTube and paste the link here.

---

## 🖼️ Optional Screenshots

You can add a `screenshots/` folder and include:

| Login Page | Dashboard |
|------------|-----------|
| ![Login](./screenshots/login.png) | ![Dashboard](./screenshots/dashboard.png) |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

### ✨ Author

Made with ❤️ by [Sikandar](https://github.com/Sikandar-07-code)
