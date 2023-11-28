class App {
    


    this. appNaam = 'jeroen';
    this. versienummer = 1.2;
    this. auteur = "Emiel";
    this. copyright = "maastricht";
    this. distributor = "henk van veen";
    this. darkmode = true;


    console.log("appnaam:" + app.appNaam);
    console.log("versienummer:" + app.versienummer);
    console.log("autrur:" + app.auteur);
    console.log("copyright:" + app.copyright);
    console.log("distributor:" + app.distributor);
    console.log("darkmode:" + app.darkmode);
    
}

let app = new App();
app.runApplication();
