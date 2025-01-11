import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';

const router = express.Router();

// Suppression
router.delete("/vehicule/:id", vehiculeController.deleteVehicule);

const deleteVehicule = router;

export default deleteVehicule;