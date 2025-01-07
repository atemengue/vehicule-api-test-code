/**
 * @swagger
 * /vehicule/search/{immatriculation}:
 *   get:
 *     summary: Récupérer un véhicule par son numéro d'immatriculation
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: immatriculation
 *         schema:
 *           type: string
 *         required: true
 *         description: Numéro d'immatriculation du véhicule
 *     responses:
 *       200:
 *         description: Véhicule trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /vehicules/filter/price:
 *   get:
 *     summary: Filtrer les véhicules par prix
 *     tags: [Véhicules]
 *     parameters:
 *       - in: query
 *         name: prix
 *         schema:
 *           type: number
 *         required: true
 *         description: Prix maximum des véhicules
 *     responses:
 *       200:
 *         description: Liste des véhicules filtrés par prix
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Aucun véhicule trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /vehicules:
 *   get:
 *     summary: Récupérer tous les véhicules
 *     tags: [Véhicules]
 *     responses:
 *       200:
 *         description: Liste de tous les véhicules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Aucun véhicule trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /vehicule/{id}:
 *   get:
 *     summary: Récupérer un véhicule par son ID
 *     tags: [Véhicules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du véhicule
 *     responses:
 *       200:
 *         description: Véhicule trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur serveur
 */
import express from 'express';
import { getallVehicule, getVehiculeById, getVehiculeByImmatriculation, searchVehiculeByPrice } from '../controller/vehiculeController.js';


const router = express.Router();

// GET vehicule by immaniculation number  (immatriculation)
router.get('/vehicule/search/:immatriculation', getVehiculeByImmatriculation);

// FILTER vehicule by price
router.get('/vehicules/filter/price', searchVehiculeByPrice);

//GET all vehicules
router.get('/vehicules', getallVehicule);

// GET vehicule by id
router.get('/vehicule/:id', getVehiculeById);


const readVehiculeRoute = router;

export default readVehiculeRoute;


