class App {
    runApplication() {
        console.log("Hello world");
        
        let magicaart= {
            attack: 3,
            defense: 2,
            name: "basic creature",
            cost: ["1R","1B"],
            text: "this basic creature is better at attacking"
             
        };
        let oneCost = magicaart.cost[0]
        let twoCost = magicaart.cost[1]

        console.log("you play: "+magicaart.name);
        console.log("this basic creature is better at attacking");
        console.log(`basic creature has ${magicaart.attack} attack`);
        console.log(`basic creature has ${magicaart.defense} defense`);
        console.log(`you played: ${oneCost} and ${twoCost}`);
    }
}

let app = new App();
app.runApplication();
