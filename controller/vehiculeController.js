import vehiculeData from '../data/vehicule.js';
import Vehicule from '../model/vehiculeModel.js';

const createVehicule = (req, res) => {
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
}

const deleteVehicule = (req, res) => {
  try {
    const index = vehiculeData.findIndex(vehicle => vehicle.id === req.params.id);
    if (index !== -1) {
      vehiculeData.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Vehicle not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const getVehiculeByImmatriculation = (req, res) => {
  try {
    const vehicle = vehiculeData.find(vehicle => vehicle.immatriculation === req.params.immatriculation);
    if (!vehicle) {
      res.status(404).send("Vehicle not found");
    } else {
      res.send(vehicle);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}


const updateVehicule = (req, res) => {
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
}


const getallVehicule = (req, res) => {
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
}


const getVehiculeById = (req, res) => {
  try {
    const vehicle = vehiculeData.find(vehicle => vehicle.id === req.params.id);
    if (!vehicle) {
      res.status(404).send("Vehicle not found");
    } else {
      res.send(vehicle);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const searchVehiculeByPrice = (req, res) => {
  try {
    const vehicles = vehiculeData.filter(vehicle => vehicle.rentalPrice <= req.params.maxPrice);
    if (!vehicles || vehicles.length === 0) {
      res.status(404).send("Vehicles not found");
    } else {
      res.send(vehicles);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

export {
  createVehicule, deleteVehicule, getallVehicule, getVehiculeById, getVehiculeByImmatriculation, searchVehiculeByPrice, updateVehicule
};

