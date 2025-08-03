const Upload = require('../models/Upload');
const Agent = require('../models/Agent');

const getLeadsByAgent = async (req, res) => {
  try {
    const agentId = req.params.agentId;
    console.log('Agent ID:', agentId);

    const agent = await Agent.findById(agentId);
    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    const upload = await Upload.findOne({ agentId });

    if (!upload) {
      return res.status(404).json({ message: 'No leads assigned to this agent' });
    }

    res.json({
      agent: agent.name,
      leads: upload.leads,
    });
  } catch (error) {
    console.error('Get Leads Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getLeadsByAgent,
};
