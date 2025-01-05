import express from 'express';
import { createVehicule } from '../controller/vehiculeController.js';

const router = express.Router();

//POST vehicule
router.post('/vehicule', createVehicule)

const creationVehicule = router;

export default creationVehicule;