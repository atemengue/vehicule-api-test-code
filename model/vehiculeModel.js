import { v4 as uuidv4 } from 'uuid';

class Vehicule {
  constructor(immatriculation, marque, modele, annee, prix) {
    this.id = uuidv4();
    this.immatriculation = immatriculation;
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.prix = prix;
  }
}

export default Vehicule;  