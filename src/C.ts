interface ControlerActions {
    sauter(): void;
    attaquer(): void;
    interagir(): void;
}
  
class Clavier {
    appuyerEspace() { console.log("Saut avec espace"); }
    clicGauche()    { console.log("Attaque avec clic gauche"); }
    clicDroit()     { console.log("Interaction avec clic droit"); }
}
  
class ClavierAdapter implements ControlerActions {
    constructor(private clavier: Clavier) {}
  
    sauter() {
      this.clavier.appuyerEspace();
    }
  
    attaquer() {
      this.clavier.clicGauche();
    }
  
    interagir() {
      this.clavier.clicDroit();
    }
}

class ManetteXbox {
    boutonA() { console.log("Saut avec bouton A"); }
    boutonB() { console.log("Attaque avec bouton B"); }
    boutonX() { console.log("Interaction avec bouton X"); }
  }
  
  class XboxAdapter implements ControlerActions {
    constructor(private manette: ManetteXbox) {}
  
    sauter() {
      this.manette.boutonA();
    }
  
    attaquer() {
      this.manette.boutonB();
    }
  
    interagir() {
      this.manette.boutonX();
    }
  }
  
  class ManettePS5 {
    boutonX() { console.log("Saut avec bouton X (PS5)"); }
    boutonO() { console.log("Attaque avec bouton O"); }
    boutonTriangle() { console.log("Interaction avec bouton Triangle"); }
  }
  
  class PS5Adapter implements ControlerActions {
    constructor(private manette: ManettePS5) {}
  
    sauter() {
      this.manette.boutonX();
    }
  
    attaquer() {
      this.manette.boutonO();
    }
  
    interagir() {
      this.manette.boutonTriangle();
    }
}

const clavier = new Clavier();
const xbox = new ManetteXbox();
const ps5 = new ManettePS5();

const controleClavier: ControlerActions = new ClavierAdapter(clavier);
const controleXbox: ControlerActions = new XboxAdapter(xbox);
const controlePS5: ControlerActions = new PS5Adapter(ps5);

// Exemple : le jeu appelle toujours la même interface
controleClavier.sauter();   // "Saut avec espace"
controleXbox.attaquer();    // "Attaque avec bouton B"
controlePS5.interagir();    // "Interaction avec bouton Triangle"

  