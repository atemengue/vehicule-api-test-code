import bodyParser from 'body-parser';
import express from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';
import seedData from './data/seedData.js  ';
import vehiculeData from './data/vehicule.js';
import vehiculeApiRoutes from './routes/index.js';

function seed() {
  vehiculeData.push(...seedData);
}

// Create a new express application instance
const app = express();

app.use(bodyParser.json());

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  }
})

app.use(pinoHttp({ logger }));


seed();



app.get('/', (req, res) => {
  res.send('Hello World!');
});

vehiculeApiRoutes(app);


app.listen(3000, () => {
  logger.info('App is running on port 3000');
});

