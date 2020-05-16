const router = require('express').Router();
const controller = require('../controllers');

router.post('/', controller.mailer);

module.exports = router;