
/**
 * @swagger
 * /vehicule/{id}:
 *   put:
 *     summary: Update a vehicule by ID
 *     tags: [Vehicule]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The vehicule ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               marque:
 *                 type: string
 *               modele:
 *                 type: string
 *               annee:
 *                 type: integer
 *               prix:
 *                 type: number
 *             example:
 *               marque: "Toyota"
 *               modele: "Corolla"
 *               annee: 2020
 *               prix: 20000
 *     responses:
 *       200:
 *         description: The updated vehicule
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 marque:
 *                   type: string
 *                 modele:
 *                   type: string
 *                 annee:
 *                   type: integer
 *                 prix:
 *                   type: number
 *       404:
 *         description: Vehicule not found
 *       500:
 *         description: Internal server error
 */
import express from 'express';
import { updateVehicule } from '../controller/vehiculeController.js';

const router = express.Router();

// UPDATE vehicule by id
router.put('/vehicule/:id', updateVehicule);;

const updateVehiculeRoute = router

export default updateVehiculeRoute;

