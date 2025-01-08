import express from 'express';


const router = express.Router();


// mise a jour des informations d'un vehicule
router.put("/vehicule/:id", (req, res) => {
  const id = req.params.id;
  try {
    const index = vehiculeData.findIndex(vehicule => vehicule.id === id);
    if (index !== -1) {
      vehiculeData[index] = { ...vehiculeData[index], ...req.body };
      res.status(200).send(vehiculeData[index]);
    } else {
      res.status(404).send("Vehicule non trouvé");
    }
  } catch (error) {
    res.send(500).send("Erreur d'application")
  }
});

const updateVehicule = router;

export default updateVehicule;