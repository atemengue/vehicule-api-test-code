import Vehicule from '../model/vehiculeModel.js';


const seedData = [];

const marques = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
const modeles = ["Camry", "Civic", "F-150", "Silverado", "Altima"];
const annees = [2022, 2023, 2025, 2025];


for (let i = 0; i < 5; i++) {
  const marque = marques[Math.floor(Math.random() * marques.length)];
  const modele = modeles[Math.floor(Math.random() * modeles.length)];
  const annee = annees[Math.floor(Math.random() * annees.length)];
  const prixLocation = Math.floor(Math.random() * 351) + 150
  const vehicule = new Vehicule(`ABC${i}`, marque, modele, annee, prixLocation);
  seedData.push(vehicule);
}

export default seedData;  