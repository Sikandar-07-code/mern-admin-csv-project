const express = require('express');
const router = express.Router();
const { getLeadsByAgent } = require('../controllers/leadController');

router.get('/:agentId', getLeadsByAgent);

module.exports = router;
