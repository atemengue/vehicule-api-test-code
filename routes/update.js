
import express from 'express';
import { updateVehicule } from '../controller/vehiculeController.js';

const router = express.Router();

// UPDATE vehicule by id
router.put('/vehicule/:id', updateVehicule);;

const updateVehiculeRoute = router

export default updateVehiculeRoute; 