import { classeMorpion } from "../classeMorpion.js";

export class classeMorpionSimple extends classeMorpion {
  
    constructor(taille) {
        super(taille);
    }

    setSymbole(symbole, ligne, colonne){
        let symb = super.setSymbole(symbole, ligne, colonne);
        return symb; 
      }
    
  
  aGagne(symbole, y, x) {
    const aTrouver = symbole.repeat(3);
  
    // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
    let ligne = '';
    this.grille[y].forEach(element => (ligne += element));
    if (ligne.indexOf(aTrouver) >= 0) {
      return true;
      console.log("win")
    }
  
    // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
    let col = '';
    this.grille.forEach(element => (col += element[x]));
    if (col.indexOf(aTrouver) >= 0) {
      return true;
    }
  
    // gagné diagonale
    if (x === y) {
      let diagonale = '';
      for (let lc = 0; lc < taille; lc++) {
        diagonale += this.grille[lc][lc];
      }
      if (diagonale.indexOf(aTrouver) >= 0) {
        return true;
      }
    }
  
    // gagné diag inverse
    if (x === taille - (y + 1)) {
      let inverse = '';
      for (let lc = 0; lc < taille; lc++) {
        inverse += this.grille[lc][taille - (lc + 1)];
      }
      if (inverse.indexOf(aTrouver) >= 0) {
        return true;
      }
    }
  
    return false;
  }  
  
  
  
  
  
  
  
  
  
  
    
  }