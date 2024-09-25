//feedback.js
const express = require("express");
const router = express.Router();
const getAllFeedback = require('../controllers/feedbackController')

router.route("/").post(getAllFeedback); 

module.exports = router;  