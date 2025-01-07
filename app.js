
import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';
// import seedData from './data/seedData.js  ';
import vehiculeData from './data/vehicule.js';
import vehiculeApiRoutes from './routes/index.js';
import swaggerSetup from './swagger.js';


// function seed() {
//   vehiculeData.push(...seedData);
// }

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

swaggerSetup(app);




// healthcheck endpoint
/**
 * @swagger
 * /:
 *   get:
 *     summary: Healthcheck endpoint.
 *     description: Returns a message indicating that the service is running.
 *     responses:
 *       200:
 *         description: A message indicating that the service is running.
 */

app.get('/', (req, res) => {
  res.send('Hello World!');
});

vehiculeApiRoutes(app);


export default app;
