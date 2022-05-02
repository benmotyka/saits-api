import express from 'express';
import routes from './routes';
// import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json({ limit: '15mb' }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`App runnig on port ${port}.`);
});