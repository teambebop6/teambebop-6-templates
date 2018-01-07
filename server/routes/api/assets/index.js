/**
 * Created by Henry Huang on 1/5/18.
 */
import express from 'express';

const router = express.Router();

// TODO
router.use('/', express.static('./app/assets'));
router.use('/', express.static('./app/public'));

export default router;
