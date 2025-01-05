import mongoose from 'mongoose';

const vehiculeSchema = new mongoose.Schema({
  immatriculation: {
    type: String,
    required: true,
    unique: true,
  },
  marque: String,
  modele: String,
  annee: Number,
  prix: Number
}, {
  timestamps: true
});

const VehiculeModel = mongoose.model("vehiculeModel", vehiculeSchema);
export default VehiculeModel;
