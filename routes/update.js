import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';


const router = express.Router();

// mise a jour des informations d'un vehicule
router.put("/vehicule/:id", vehiculeController.updateVehicule);

const updateVehicule = router;

export default updateVehicule;