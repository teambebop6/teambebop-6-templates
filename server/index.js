import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

const viewsPath = process.env.NODE_ENV === 'production' ? '../views' : './views';

app.set('views', path.join(__dirname, viewsPath));
app.set('view engine', 'ejs');

app.use('/', routes());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Team Bebop 6 listening on port ${port}!`);
});
