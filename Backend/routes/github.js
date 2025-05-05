const express = require('express');
const router = express.Router();
const {submitAndSaveGitHubUser} = require('../controller/userController')


router.post('/submit',submitAndSaveGitHubUser);

module.exports = router;