import { vehiculeData } from '../data/vehiculeData.js';
import Vehicule from '../models/VehiculeModel.js';

// create
function createVehicule(req, res) {
  const data = req.body;
  try {
    const vehicule = new Vehicule(data.marque, data.model, data.immatriculation, data.annee, data.prixLocation);
    vehiculeData.push(vehicule);
    res.status(201).send("Vehicule crée");
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
}

// read all
function readVehicules(req, res) {
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
}

// read by id
function readVehiculeByiD(req, res) {
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
}
// read by immatriculation
function readVehiculeByImmatriculation(req, res) {
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
}

// read searchVehicule By Price
function searchVehiculeByPrice(req, res) {
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
}

function updateVehicule(req, res) {
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
}

function deleteVehicule(req, res) {
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
}

export default {
  createVehicule,
  readVehicules,
  readVehiculeByiD,
  readVehiculeByImmatriculation,
  searchVehiculeByPrice,
  updateVehicule,
  deleteVehicule
}