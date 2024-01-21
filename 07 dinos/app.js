class Dino {
    eatFood(foodToEat) {
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een " + this.naam)
        console.log("mijn honger: " + this.honger)
    }

    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
}

class App {
    runApplication() {
        console.log("Hello world");

        let trex = new Dino("T-Rex", true, 10);
        let triceratops = new Dino("Triceratops", false, 20);

        console.log(trex);
        console.log(triceratops);

        trex.eatFood(triceratops);
        console.log("leeft " + triceratops.naam + "? "+ triceratops.leeft);
    }
}

let app = new App();
app.runApplication();
