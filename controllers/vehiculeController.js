import Vehicule from '../models/VehiculeModel.js';

// create
function createVehicule(req, res) {
  const data = req.body;
  try {
    const vehicule = new Vehicule(data);
    vehicule.save();
    res.status(201).send("Vehicule crée");
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
}

// read all
async function readVehicules(req, res) {
  try {
    const vehicules = await Vehicule.find()
    if (!vehicules || vehicules.length === 0) {
      res.status(404).send("Vehicules non trouvés")
    } else {
      res.send(vehicules);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
}

// read by id
async function readVehiculeByiD(req, res) {
  const id = req.params.id;
  try {
    const vehicule = await Vehicule.findById(id);
    if (!vehicule) {
      res.status(404).send("Vehicule non trouvé");
    } else {
      res.send(vehicule)
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
}
// read by immatriculation
async function readVehiculeByImmatriculation(req, res) {
  const immatriculation = req.params.immatriculation;
  try {
    const vehicule = await Vehicule.findOne({ immatriculation: immatriculation });
    if (!vehicule) {
      res.status(404).send("Vehicule Non trouvé");
    } else {
      res.send(vehicule);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur d'application");
  }
}

// read searchVehicule By Price
async function searchVehiculeByPrice(req, res) {
  const prixMax = parseInt(req.params.prixMax);
  try {
    const vehicules = await Vehicule.find({
      prixLocation: { $lte: prixMax }
    })
    if (!vehicules || vehicules.length === 0) {
      res.status(404).send("Vehicules non trouvés");
    } else {
      res.send(vehicules);
    }
  } catch (error) {
    res.status(500).send("Erreur d'application");
  }
}

async function updateVehicule(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const vehicule = await Vehicule.findByIdAndUpdate(id, data, {
      new: true
    })
    res.send(vehicule);
  } catch (error) {
    res.send(500).send("Erreur d'application")
  }
}

async function deleteVehicule(req, res) {
  const id = req.params.id;
  try {
    await Vehicule.findByIdAndDelete(id)
    res.status(204).send();
  } catch (error) {
    console.log(error)
    res.status(500).send("Erreur d'application");
  }
}

export default {
  createVehicule,
  readVehicules,
  readVehiculeByiD,
  readVehiculeByImmatriculation,
  searchVehiculeByPrice,
  updateVehicule,
  deleteVehicule
}