/**
 * @swagger
 * /vehicule/{id}:
 *   delete:
 *     summary: Delete a vehicule by ID
 *     description: Deletes a vehicule from the database using its ID.
 *     tags:
 *       - Vehicule
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the vehicule to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vehicule successfully deleted
 *       404:
 *         description: Vehicule not found
 *       500:
 *         description: Internal server error
 */
import express from 'express';
import { deleteVehicule } from '../controller/vehiculeController.js';

const router = express.Router();

// DELETE vehicule by id
router.delete('/vehicule/:id', deleteVehicule);


const deleteVehiculeRoute = router

export default deleteVehiculeRoute;