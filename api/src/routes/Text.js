const { Router } = require('express');
const { generateTextReverse } = require('../Controllers/controller_text');


const router = Router();
router.get('/', generateTextReverse)

module.exports = router;