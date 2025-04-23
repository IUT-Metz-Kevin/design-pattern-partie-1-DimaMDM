// Interface commune à toutes les boissons
interface Boisson {
    getDescription(): string;
    getCost(): number;
  }
  
  // Classe de base : Café
  class Cafe implements Boisson {
    getDescription(): string {
      return "Café";
    }
  
    getCost(): number {
      return 4;
    }
  }
  
  // Classe abstraite de décorateur
  abstract class OptionBoisson implements Boisson {
    constructor(protected boisson: Boisson) {}
  
    abstract getDescription(): string;
    abstract getCost(): number;
  }
  
  // Décorateurs concrets
  class Lait extends OptionBoisson {
    getDescription(): string {
      return this.boisson.getDescription() + ", Lait";
    }
  
    getCost(): number {
      return this.boisson.getCost() + 1;
    }
  }
  
  class Chantilly extends OptionBoisson {
    getDescription(): string {
      return this.boisson.getDescription() + ", Chantilly";
    }
  
    getCost(): number {
      return this.boisson.getCost() + 1;
    }
  }
  
  class SaveurVanille extends OptionBoisson {
    getDescription(): string {
      return this.boisson.getDescription() + ", Saveur Vanille";
    }
  
    getCost(): number {
      return this.boisson.getCost() + 0.5;
    }
}
  
  
let maBoisson: Boisson = new Cafe();                         // Café
maBoisson = new Lait(maBoisson);                             // Café, Lait
maBoisson = new Chantilly(maBoisson);                        // Café, Lait, Chantilly
maBoisson = new SaveurVanille(maBoisson);                    // Café, Lait, Chantilly, Saveur Vanille
  
console.log(maBoisson.getDescription());  // Café, Lait, Chantilly, Saveur Vanille
console.log(maBoisson.getCost());         // 4 + 1 + 1 + 0.5 = 6.5
         
