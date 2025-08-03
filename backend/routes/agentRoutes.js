const express = require('express');
const router = express.Router(); // ← This line is missing
const { addAgent } = require('../controllers/agentController');
const Agent = require('../models/Agent'); // ← Add this to use Agent.find()

// Your existing POST route
router.post('/add', addAgent);

// ✅ Add GET route to fetch all agents
router.get('/all', async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch agents' });
  }
});

module.exports = router;
