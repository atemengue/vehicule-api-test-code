import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';

/**
 * @swagger
 * /vehicule/{id}:
 *   put:
 *     summary: Mettre à jour les informations d'un véhicule
 *     tags: [Vehicule]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du véhicule à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicule'
 *     responses:
 *       200:
 *         description: Les informations du véhicule ont été mises à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur d'application
 */

const router = express.Router();

// mise a jour des informations d'un vehicule
router.put("/vehicule/:id", vehiculeController.updateVehicule);

const updateVehicule = router;

export default updateVehicule;