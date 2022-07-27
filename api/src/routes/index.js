const { Router } = require('express');
const textRouter = require('./Text');


const router = Router();
router.use('/generate', textRouter);


module.exports = router;
