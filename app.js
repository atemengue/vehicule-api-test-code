import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import pino from 'pino';
import { pinoHttp } from 'pino-http';
import VehiculeAPIRoutes from './routes/index.js';
import swaggerSetup from './swagger.js';


const app = express();
app.use(bodyParser.json());

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

// logger pino
app.use(pinoHttp({ logger }));

//swagger Ui
swaggerSetup(app);

// initialisation des routes
VehiculeAPIRoutes(app);

/**
 * @swagger
 * /:
 *  get:
 *    summary: Point d'entrée
 *    description: Verification de l'etat de L'API
 *    responses:
 *      200:
 *        description: l'Api fonctionne normalement
 */

app.get('/', (req, res) => {
  res.send("Hello tout")
});


export default app;