class App {
    runApplication() {
        console.log("Hello world");
        let appNaam = 'jeroen';
        let versienummer = 1.2;
        let auteur = "Emiel";
        let copyright = "maastricht";
        let distributor = "henk van veen";
        let darkmode = true;
        console.log(appNaam);
        console.log(versienummer);
        console.log(auteur);
        console.log(copyright);
        console.log(distributor);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();
