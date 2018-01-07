/**
 * Created by Henry Huang on 1/5/18.
 */
import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
  // TODO
  // console.log(req);
  return res.status(200).json({
    msg: 'This is user page!',
  });
});

export default router;
