import express from 'express';
import vehiculeData from '../data/vehicule.js';
import Vehicule from '../model/vehiculeModel.js';


const router = express.Router();

//POST vehicule
router.post('/vehicule', (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const vehicule = new Vehicule(data.immatriculation, data.marque, data.modele, data.annee, data.prix);
    vehiculeData.push(vehicule);
    res.status(201).send(vehicule);
  } catch (error) {
    logger.error(error);
    res.status(500).send('Erreur d\'application');
  }
})

const creationVehicule = router;

export default creationVehicule;