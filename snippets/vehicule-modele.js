const VehiculeSchema = new mongoose.Schema({
  immatriculation: {
    type: String,
    required: true,
    unique: true,
  },
  marque: String,
  model: String,
  annee: Number,
  prixLocation: Number
}, {
  timestamps: true
});

const VehiculeModel = new mongoose.model('Vehicules', VehiculeSchema);


export default VehiculeModel;