import { v4 as uuidv4 } from 'uuid';

class Vehicule {
  constructor(marque, model, immatriculation, annee, prixLocation) {

    if (typeof marque !== 'string' || typeof model !== 'string' || typeof immatriculation !== 'string') {
      throw new Error("la marque, le model, l'immatriculation doivent etre de type string");
    }

    if (typeof annee !== 'number' || typeof prixLocation !== 'number') {
      throw new Error("annee et prixLocation doivent etre du type number");
    }


    this.id = uuidv4();
    this.marque = marque;
    this.model = model;
    this.immatriculation = immatriculation;
    this.annee = annee;
    this.prixLocation = prixLocation
  }
}

export default Vehicule;