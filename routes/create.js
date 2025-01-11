import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';

const router = express.Router();


// creer un vehicule
router.post('/vehicule', vehiculeController.createVehicule);

const createVehicule = router;
export default createVehicule;
