/**
 * @swagger
 * components:
 *   schemas:
 *     Vehicule:
 *       type: object
 *       required:
 *         - immatriculation
 *       properties:
 *         immatriculation:
 *           type: string
 *           description: Le numéro d'immatriculation unique du véhicule
 *         marque:
 *           type: string
 *           description: La marque du véhicule
 *         modele:
 *           type: string
 *           description: Le modèle du véhicule
 *         annee:
 *           type: integer
 *           description: L'année de fabrication du véhicule
 *         prix:
 *           type: number
 *           description: Le prix du véhicule
 *       example:
 *         immatriculation: "AB-123-CD"
 *         marque: "Toyota"
 *         modele: "Corolla"
 *         annee: 2020
 *         prix: 15000
 */
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
