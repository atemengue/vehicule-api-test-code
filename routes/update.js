
import express from 'express';
import vehiculeData from '../data/vehicule.js';

const router = express.Router();

// UPDATE vehicule by id
router.put('/vehicule/:id', (req, res) => {
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



const updateVehiculeRoute = router

export default updateVehiculeRoute;