
/**
 * @swagger
 * /vehicules:
 *   get:
 *     summary: Retourne la liste de tous les véhicules
 *     tags: [Vehicule]
 *     responses:
 *       200:
 *         description: La liste des véhicules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Aucun véhicule trouvé
 *       500:
 *         description: Erreur d'application
 */

/**
 * @swagger
 * /vehicule/{id}:
 *   get:
 *     summary: Retourne un véhicule par son ID
 *     tags: [Vehicule]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du véhicule
 *     responses:
 *       200:
 *         description: Le véhicule correspondant à l'ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur d'application
 */

/**
 * @swagger
 * /vehicule/search/{immatriculation}:
 *   get:
 *     summary: Retourne un véhicule par son immatriculation
 *     tags: [Vehicule]
 *     parameters:
 *       - in: path
 *         name: immatriculation
 *         schema:
 *           type: string
 *         required: true
 *         description: Immatriculation du véhicule
 *     responses:
 *       200:
 *         description: Le véhicule correspondant à l'immatriculation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Véhicule non trouvé
 *       500:
 *         description: Erreur d'application
 */

/**
 * @swagger
 * /vehicule/price/{prixMax}:
 *   get:
 *     summary: Recherche des véhicules par prix maximum
 *     tags: [Vehicule]
 *     parameters:
 *       - in: path
 *         name: prixMax
 *         schema:
 *           type: integer
 *         required: true
 *         description: Prix maximum de location
 *     responses:
 *       200:
 *         description: Liste des véhicules correspondant au prix maximum
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicule'
 *       404:
 *         description: Aucun véhicule trouvé
 *       500:
 *         description: Erreur d'application
 */

import express from 'express';
import vehiculeController from '../controllers/vehiculeController.js';
const router = express.Router();

// afficher les informations des vehicules
router.get("/vehicules", vehiculeController.readVehicules);

router.get("/vehicule/:id", vehiculeController.readVehiculeByiD);

router.get("/vehicule/search/:immatriculation", vehiculeController.readVehiculeByImmatriculation);

router.get("/vehicule/price/:prixMax", vehiculeController.searchVehiculeByPrice);

const readVehicule = router;

export default readVehicule;