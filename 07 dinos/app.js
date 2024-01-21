class Dino {
    constructor() {
        this.naam = "Pik";
        this.vleeseter = true;
        this.leeftijd = 7;
    }
}





class App {
    runApplication() {
        console.log("Hello world");

        let dino = new Dino("pik", true, 7);
        console.log(dino);

        console.log("de leeftijd van deze " + dino.naam + " is: " + dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees: " + dino.vleeseter);
    }
}




let app = new App();
app.runApplication();
