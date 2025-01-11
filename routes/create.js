/**
 * @swagger
 * /vehicule:
 *   post:
 *     summary: Créer un nouveau véhicule
 *     tags: [Vehicule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicule'
 *     responses:
 *       201:
 *         description: Véhicule créé avec succès
 *       500:
 *         description: Erreur d'application
 */

import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';

const router = express.Router();

router.post('/vehicule', vehiculeController.createVehicule);

const createVehicule = router;
export default createVehicule;
