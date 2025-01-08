import express from 'express';
const router = express.Router();


// afficher les informations des vehicules
router.get("/vehicules", (req, res) => {
  try {
    const vehicules = vehiculeData;
    if (!vehicules || vehicules.length === 0) {
      res.status(404).send("Vehicules non trouvés")
    } else {
      res.send(vehicules);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

router.get("/vehicule/:id", (req, res) => {
  const id = req.params.id;
  try {
    const vehicule = vehiculeData.find(vehicule => vehicule.id === id);
    if (!vehicule) {
      res.status(404).send("Vehicule non trouvé");
    } else {
      res.send(vehicule)
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

router.get("/vehicule/search/:immatriculation", (req, res) => {
  const immatriculation = req.params.immatriculation;
  try {
    const vehicule = vehiculeData.find(vehicule => vehicule.immatriculation === immatriculation);
    if (!vehicule) {
      res.status(404).send("Vehicule Non trouvé");
    } else {
      res.send(vehicule);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

router.get("/vehicule/price/:prixMax", (req, res) => {
  const prixMax = parseInt(req.params.prixMax);
  try {
    const vehicules = vehiculeData.filter(vehicule => vehicule.prixLocation <= prixMax);
    if (!vehicules || vehicules.length === 0) {
      res.status(404).send("Vehicules non trouvés");
    } else {
      res.send(vehicules);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

const readVehicule = router;

export default readVehicule;