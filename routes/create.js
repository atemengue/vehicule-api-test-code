import express from 'express';
import Vehicule from '../models/VehiculeModel.js';

const router = express.Router();
// creer un vehicule
router.post('/vehicule', (req, res) => {
  const data = req.body;
  try {
    const vehicule = new Vehicule(data.marque, data.model, data.immatriculation, data.annee, data.prixLocation);
    vehiculeData.push(vehicule);
    res.status(201).send("Vehicule crée");
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

const createVehicule = router;
export default createVehicule;
