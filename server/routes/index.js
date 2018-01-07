/**
 * Created by Henry Huang on 1/5/18.
 */
import express from 'express';
import asserts from './api/assets/index';
import def from './api/default/index';
import admin from './api/admin/index';

export default (config) => {
  const router = express.Router();

  // TODO
  console.log(`config: ${config}`);

  router.use(express.static('public'));

  router.get('/', (req, res) => {
    res.status(200).render('index.ejs');
  });

  // index
  router.use('/api', def);

  // admin
  const checkAdminAuth = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json();
    }
    return next();
  };
  router.use('/api/admin', checkAdminAuth, admin);

  // If all else failed, show 404 page
  router.all('/*', (req, res) => {
    res.status(404).json({});
  });

  return router;
};
