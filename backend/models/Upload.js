const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',
    required: true,
  },
  leads: [
    {
      FirstName: String,
      Phone: String,
      Notes: String,
    },
  ],
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Upload', uploadSchema);
