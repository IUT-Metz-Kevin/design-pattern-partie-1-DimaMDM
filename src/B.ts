// Interface commune à tous les éléments de l'organisation
interface OrganisationElement {
    afficher(indent?: string): void;
  }
  
  // Feuille : Employé
  class Employe implements OrganisationElement {
    constructor(private nom: string) {}
  
    afficher(indent: string = ""): void {
      console.log(indent + "Employé : " + this.nom);
    }
  }
  
  // Composite : Département
  class Departement implements OrganisationElement {
    private enfants: OrganisationElement[] = [];
  
    constructor(private nom: string) {}
  
    ajouter(element: OrganisationElement): void {
      this.enfants.push(element);
    }
  
    afficher(indent: string = ""): void {
      console.log(indent + "Département : " + this.nom);
      for (const enfant of this.enfants) {
        enfant.afficher(indent + "  ");
      }
    }
}
  
const direction = new Departement("Direction Générale");
const secretariat = new Departement("Secrétariat général");
secretariat.ajouter(new Employe("Alice"));

const tech = new Departement("Département technique");
tech.ajouter(new Departement("IT"));
tech.ajouter(new Departement("Web"));

const commercial = new Departement("Département commercial");
commercial.ajouter(new Departement("Ventes"));
commercial.ajouter(new Departement("Achats"));

const financier = new Departement("Département financier");
financier.ajouter(new Departement("RH"));
financier.ajouter(new Departement("Comptabilité"));
financier.ajouter(new Departement("Administration"));

direction.ajouter(secretariat);
direction.ajouter(tech);
direction.ajouter(commercial);
direction.ajouter(financier);

// Affichage de l'organigramme
direction.afficher();
