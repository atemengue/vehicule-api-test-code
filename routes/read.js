import express from 'express';
import vehiculeData from '../data/vehicule.js';


const router = express.Router();

// GET vehicule by immaniculation number  (immatriculation)
router.get('/vehicule/search/:immatriculation', (req, res) => {
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
});

// FILTER vehicule by price
router.get('/vehicules/filter/price', (req, res) => {
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
});

//GET all vehicules
router.get('/vehicules', (req, res) => {
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
router.get('/vehicule/:id', (req, res) => {
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
});


const readVehiculeRoute = router;

export default readVehiculeRoute;