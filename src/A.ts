class GameSettings {
    private static instance: GameSettings;
  
    // Paramètres du jeu
    public difficulty: string = "Normal";
    public language: string = "FR";
  
    public musicVolume: number = 70;
    public effectsVolume: number = 80;
  
    public resolution: string = "1920x1080";
    public graphicsQuality: string = "High";
  
    // Constructeur privé : empêche l'instanciation directe
    private constructor() {}
  
    // Méthode d'accès à l'unique instance
    public static getInstance(): GameSettings {
      if (!GameSettings.instance) {
        GameSettings.instance = new GameSettings();
      }
      return GameSettings.instance;
    }
}

// Accès à l'instance depuis un module
const settings = GameSettings.getInstance();

settings.difficulty = "Hard";
settings.language = "EN";
settings.musicVolume = 50;

// Accès depuis un autre module
const otherSettings = GameSettings.getInstance();
console.log(otherSettings.difficulty);  // "Hard"

  