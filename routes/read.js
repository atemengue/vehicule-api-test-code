import express from 'express';
import { getallVehicule, getVehiculeById, getVehiculeByImmatriculation, searchVehiculeByPrice } from '../controller/vehiculeController.js';


const router = express.Router();

// GET vehicule by immaniculation number  (immatriculation)
router.get('/vehicule/search/:immatriculation', getVehiculeByImmatriculation);

// FILTER vehicule by price
router.get('/vehicules/filter/price', searchVehiculeByPrice);

//GET all vehicules
router.get('/vehicules', getallVehicule);

// GET vehicule by id
router.get('/vehicule/:id', getVehiculeById);


const readVehiculeRoute = router;

export default readVehiculeRoute;