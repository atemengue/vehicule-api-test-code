import bodyParser from 'body-parser';
import express from 'express';
import pino from 'pino';
import { pinoHttp } from 'pino-http';
import seedData from './data/seedData.js';
import Vehicule from './models/VehiculeModel.js';

const vehiculeData = [];

function seed() {
  vehiculeData.push(...seedData);
}

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


// seed des donnees
seed();
// structure des routes


app.get('/', (req, res) => {
  res.send("Hello tout")
});


export default app;