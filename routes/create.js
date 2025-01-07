/**
 * @swagger
 * /vehicule:
 *   post:
 *     summary: Create a new vehicule
 *     tags: 
 *       - Vehicule
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               make:
 *                 type: string
 *                 example: "Toyota"
 *               model:
 *                 type: string
 *                 example: "Corolla"
 *               year:
 *                 type: integer
 *                 example: 2020
 *     responses:
 *       201:
 *         description: Vehicule created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 make:
 *                   type: string
 *                   example: "Toyota"
 *                 model:
 *                   type: string
 *                   example: "Corolla"
 *                 year:
 *                   type: integer
 *                   example: 2020
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
import express from 'express';
import { createVehicule } from '../controller/vehiculeController.js';

const router = express.Router();

//POST vehicule
router.post('/vehicule', createVehicule)

const creationVehicule = router;

export default creationVehicule;

