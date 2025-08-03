const csv = require('csvtojson');
const Agent = require('../models/Agent'); // Make sure this path is correct
const Upload = require('../models/Upload'); // We'll create this model next

// Controller function to handle CSV upload
const uploadCSVAndDistribute = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Convert CSV buffer to JSON
    const jsonArray = await csv().fromString(req.file.buffer.toString());

    // Get all agents
    const agents = await Agent.find();
    if (agents.length === 0) {
      return res.status(400).json({ message: 'No agents found to assign tasks' });
    }

    // Distribute tasks evenly
    const distributed = agents.map(() => []);
    jsonArray.forEach((entry, index) => {
      const agentIndex = index % agents.length;
      distributed[agentIndex].push(entry);
    });

    // Save to DB
    for (let i = 0; i < agents.length; i++) {
      if (distributed[i].length > 0) {
        await Upload.create({
          agentId: agents[i]._id,
          leads: distributed[i],
        });
      }
    }

    res.status(200).json({ message: 'CSV uploaded and data distributed successfully' });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Server error while processing file' });
  }
};

module.exports = {
  uploadCSVAndDistribute,
};
