import express from 'express';
let router = express.Router();

router.get("/", (req, res) => res.sendFile(process.cwd() + '/server/views/index.html'));

// replace
router.use('/example', require('./example'));

export default router;