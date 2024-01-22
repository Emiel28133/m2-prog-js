class Plant {
    constructor(naam) {
        this.naam = naam;
        this.leeft = true;
    }
}

export class Dino {
    eatFood(foodToEat) {
        console.log("ik eet nu " + foodToEat.naam);
        foodToEat.leeft = false;
        this.honger = false;
        console.log(`I am a ${this.naam}`);
        console.log(`My hunger: ${this.honger}`);
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

        let grass = new Plant("Gras");
        let bush = new Plant("Struik");

        console.log(trex);
        console.log(triceratops);

        console.log(grass);
        console.log(bush);

        triceratops.eatFood(grass);
        console.log(`Is ${grass.naam} alive? ${grass.leeft}`);

        trex.eatFood(triceratops);
        console.log(`Is ${triceratops.naam} alive? ${triceratops.leeft}`);
    }
}

let app = new App();
app.runApplication();
