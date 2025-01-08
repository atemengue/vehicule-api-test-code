import express from 'express';

const router = express.Router();

// Suppression
router.delete("/vehicule/:id", (req, res) => {
  const id = req.params.id;
  try {
    const index = vehiculeData.findIndex(vehicule => vehicule.id === id);
    if (index !== -1) {
      vehiculeData.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send("Vehicule non trouvé");
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
});

const deleteVehicule = router;

export default deleteVehicule;