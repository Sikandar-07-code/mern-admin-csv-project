// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const agentRoutes = require('./routes/agentRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const leadRoutes = require('./routes/leadRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/agents', agentRoutes);


// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/leads', leadRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('MongoDB Connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.log(err));
