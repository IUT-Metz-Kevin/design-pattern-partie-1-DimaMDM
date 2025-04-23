interface Personnage {
    attaquer(): void;
  }
  
  class Guerrier implements Personnage {
    attaquer(): void {
      console.log("Le guerrier frappe avec une épée !");
    }
  }
  
  class Magicien implements Personnage {
    attaquer(): void {
      console.log("Le magicien lance une boule de feu !");
    }
  }
  
  class Archer implements Personnage {
    attaquer(): void {
      console.log("L'archer tire une flèche !");
    }
  }
  
  interface PersonnageFactory {
    creerPersonnage(): Personnage;
  }
  
  class GuerrierFactory implements PersonnageFactory {
    creerPersonnage(): Personnage {
      return new Guerrier();
    }
  }
  
  class MagicienFactory implements PersonnageFactory {
    creerPersonnage(): Personnage {
      return new Magicien();
    }
  }
  
  class ArcherFactory implements PersonnageFactory {
    creerPersonnage(): Personnage {
      return new Archer();
    }
  }
  
  const fabriqueGuerrier = new GuerrierFactory();
const guerrier = fabriqueGuerrier.creerPersonnage();
guerrier.attaquer();  // Le guerrier frappe avec une épée !

const fabriqueMagicien = new MagicienFactory();
const magicien = fabriqueMagicien.creerPersonnage();
magicien.attaquer();  // Le magicien lance une boule de feu !

const fabriqueArcher = new ArcherFactory();
const archer = fabriqueArcher.creerPersonnage();
archer.attaquer();    // L'archer tire une flèche !
