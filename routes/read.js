import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';
const router = express.Router();

// afficher les informations des vehicules
router.get("/vehicules", vehiculeController.readVehicules);

router.get("/vehicule/:id", vehiculeController.readVehiculeByiD);

router.get("/vehicule/search/:immatriculation", vehiculeController.readVehiculeByImmatriculation);

router.get("/vehicule/price/:prixMax", vehiculeController.searchVehiculeByPrice);

const readVehicule = router;

export default readVehicule;