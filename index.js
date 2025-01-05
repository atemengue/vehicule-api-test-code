import bodyParser from 'body-parser';
import express from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';
import seedData from './data/seedData.js  ';

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


app.get('/', (req, res) => {
  res.send('Hello World!');
});


//POST vehicule
app.post('/vehicule', (req, res) => {
  res.send('POST vehicule');
})

// UPDATE vehicule by id
app.put('/vehicule/:id', (req, res) => {
  res.send('UPDATE vehicule by id');
});

// DELETE vehicule by id
app.delete('/vehicule/:id', (req, res) => {
  res.send('DELETE vehicule by id');
});

// GET vehicule by immaniculation number  (immatriculation)
app.get('/vehicule/search/:immatriculation', (req, res) => {
  res.send('GET vehicule by immatriculation');
});

// FILTER vehicule by price
app.get('/vehicules/filter/price', (req, res) => {
  res.send('FILTER vehicule by price');
});
//GET all vehicules
app.get('/vehicules', (req, res) => {
  res.send('GET all vehicules');
});

// GET vehicule by id
app.get('/vehicule/:id', (req, res) => {
  res.send('GET vehicule by id');
});

app.listen(3000, () => {
  logger.info('App is running on port 3000');
});

