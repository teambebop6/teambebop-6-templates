/**
 * Created by Henry Huang on 1/5/18.
 */
import express from 'express';

import userRouter from './user';

const router = express.Router();

router.get('/', (req, res) => {
  // TODO
  // console.log(req);
  return res.status(200).json({
    msg: 'This is Team Bebop 6!',
  });
});

// sub routers
router.use('/user', userRouter);


export default router;
