/**
 * @swagger
 * /vehicule/{id}:
 *   delete:
 *     summary: Supprimer un véhicule par ID
 *     tags: [Vehicule]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du véhicule à supprimer
 *     responses:
 *       204:
 *         description: Véhicule supprimé avec succès
 *       500:
 *         description: Erreur d'application
 */
import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';

const router = express.Router();


// Suppression
router.delete("/vehicule/:id", vehiculeController.deleteVehicule);

const deleteVehicule = router;

export default deleteVehicule;