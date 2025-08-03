const Agent = require('../models/Agent');

const addAgent = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const agent = new Agent({ name, email, mobile, password });
    await agent.save();

    res.status(201).json({ message: "Agent created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addAgent };
