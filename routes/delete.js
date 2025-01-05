import express from 'express';
import { deleteVehicule } from '../controller/vehiculeController.js';

const router = express.Router();

// DELETE vehicule by id
router.delete('/vehicule/:id', deleteVehicule);


const deleteVehiculeRoute = router

export default deleteVehiculeRoute;