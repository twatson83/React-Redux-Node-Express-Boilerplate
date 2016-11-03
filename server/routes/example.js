import express from 'express';
import { find } from '../controllers/example';

var router = express.Router();

router.get('/', find);

module.exports = router;