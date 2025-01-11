
const seedData = [];

const marques = ["Toyata", "Mercedes", "Audi", "Ford", "Nissan"];
const modeles = ["Camry", "ML", "E-tron", "F-150", "Altima"];
const annees = [2022, 2023, 2024, 2025];

for (let i = 0; i < 5; i++) {
  const marque = marques[Math.floor(Math.random() * marques.length)];
  const modele = modeles[Math.floor(Math.random() * modeles.length)];
  const annee = annees[Math.floor(Math.random() * annees.length)];
  const prixLocation = Math.floor(Math.random() * 351) + 50000;
}

export default seedData;