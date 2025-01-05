import bodyParser from 'body-parser';
import express from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';
import seedData from './data/seedData.js  ';
import Vehicule from './model/vehiculeModel.js';

const vehiculeData = [];

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

//POST vehicule
app.post('/vehicule', (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const vehicule = new Vehicule(data.immatriculation, data.marque, data.modele, data.annee, data.prix);
    vehiculeData.push(vehicule);
    res.status(201).send(vehicule);
  } catch (error) {
    logger.error(error);
    res.status(500).send('Erreur d\'application');
  }
})

// UPDATE vehicule by id
app.put('/vehicule/:id', (req, res) => {
  try {
    const index = vehiculeData.findIndex(vehicle => vehicle.id === req.params.id);
    if (index !== -1) {
      vehiculeData[index] = { ...vehiculeData[index], ...req.body };
      res.send(vehiculeData[index]);
    } else {
      res.status(404).send({ message: 'Vehicle not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
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
  try {
    const vehicles = vehiculeData;
    if (!vehicles || vehicles.length === 0) {
      res.status(404).send("Vehicles not found");
    } else {
      res.send(vehicles);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET vehicule by id
app.get('/vehicule/:id', (req, res) => {
  res.send('GET vehicule by id');
});

app.listen(3000, () => {
  logger.info('App is running on port 3000');
});

