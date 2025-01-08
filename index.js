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


// creer un vehicule
app.post('/vehicule', (req, res) => {
  const data = req.body;
  try {
    const vehicule = new Vehicule(data.marque, data.model, data.immatriculation, data.annee, data.prixLocation);
    vehiculeData.push(vehicule);
    res.status(201).send("Vehicule crée");
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});


// afficher les informations des vehicules
app.get("/vehicules", (req, res) => {
  try {
    const vehicules = vehiculeData;
    if (!vehicules || vehicules.length === 0) {
      res.status(404).send("Vehicules non trouvés")
    } else {
      res.send(vehicules);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
})

// mise a jour des informations d'un vehicule
app.put("/vehicule/:id", (req, res) => {
  const id = req.params.id;
  try {
    const index = vehiculeData.findIndex(vehicule => vehicule.id === id);
    if (index !== -1) {
      vehiculeData[index] = { ...vehiculeData[index], ...req.body };
      res.status(200).send(vehiculeData[index]);
    } else {
      res.status(404).send("Vehicule non trouvé");
    }
  } catch (error) {
    res.send(500).send("Erreur d'application")
  }
});

// Suppression
app.delete("/vehicule/:id", (req, res) => {
  const id = req.params.id;
  try {
    const index = vehiculeData.findIndex(vehicule => vehicule.id === id);
    if (index !== -1) {
      vehiculeData.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send("Vehicule non trouvé");
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});


app.get("/vehicule/:id", (req, res) => {
  const id = req.params.id;
  try {
    const vehicule = vehiculeData.find(vehicule => vehicule.id === id);
    if (!vehicule) {
      res.status(404).send("Vehicule non trouvé");
    } else {
      res.send(vehicule)
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

app.get("/vehicule/search/:immatriculation", (req, res) => {
  const immatriculation = req.params.immatriculation;
  try {
    const vehicule = vehiculeData.find(vehicule => vehicule.immatriculation === immatriculation);
    if (!vehicule) {
      res.status(404).send("Vehicule Non trouvé");
    } else {
      res.send(vehicule);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

app.get("/vehicule/price/:prixMax", (req, res) => {
  const prixMax = parseInt(req.params.prixMax);
  try {
    const vehicules = vehiculeData.filter(vehicule => vehicule.prixLocation <= prixMax);
    if (!vehicules || vehicules.length === 0) {
      res.status(404).send("Vehicules non trouvés");
    } else {
      res.send(vehicules);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

app.listen(3000, () => {
  console.log('Server us running on port 3000');
});