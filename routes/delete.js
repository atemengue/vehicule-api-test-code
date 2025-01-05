import express from 'express';
import vehiculeData from '../data/vehicule.js';

const router = express.Router();

// DELETE vehicule by id
router.delete('/vehicule/:id', (req, res) => {
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
});


const deleteVehiculeRoute = router

export default deleteVehiculeRoute;