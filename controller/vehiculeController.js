import vehiculeData from '../data/vehicule.js';
import Vehicule from '../model/vehiculeModel.js';

const createVehicule = (req, res) => {
  try {
    const data = req.body;
    const vehicule = new Vehicule(data);
    vehicule.save();
    res.status(201).send(vehicule);
  } catch (error) {
    logger.error(error);
    res.status(500).send('Erreur d\'application');
  }
}

const deleteVehicule = async (req, res) => {
  try {
    await Vehicule.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

const getVehiculeByImmatriculation = async (req, res) => {
  try {
    const vehicle = await Vehicule.findOne({ immatriculation: req.params.immatriculation });
    if (!vehicle) {
      res.status(404).send("Vehicle not found");
    } else {
      res.send(vehicle);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}


const updateVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(vehicule);
  } catch (err) {
    res.status(500).send(err);
  }
}


const getallVehicule = async (req, res) => {
  try {
    const vehicles = await Vehicule.find();
    if (!vehicles) {
      res.status(404).send("Vehicles not found");
    } else {
      res.send(vehicles);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}


const getVehiculeById = async (req, res) => {
  try {
    const vehicle = await Vehicule.findById(req.params.id);
    if (!vehicle) {
      res.status(404).send("Vehicle not found");
    } else {
      res.send(vehicle);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const searchVehiculeByPrice = async (req, res) => {
  try {
    const vehicles = await Vehicule.find({
      prix: { $lte: req.params.prix },
    });
    if (!vehicles || vehicles.length === 0) {
      res.status(404).send("Vehicles not found");
    } else {
      res.send(vehicles);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

export {
  createVehicule, deleteVehicule, getallVehicule, getVehiculeById, getVehiculeByImmatriculation, searchVehiculeByPrice, updateVehicule
};

