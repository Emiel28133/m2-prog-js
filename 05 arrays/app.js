class App {
    runApplication() {
        console.log("Hello world");
        
       const artist = ["Slipknot,", "Ghost", "Type o negative", "Marilyn manson", "Sisters of mercy", "christian death", "Killing joke"];
       // console.log(artist);
       const nummers = [2, 5, 7];
       // console.log(nummers);

        for (let i = 0; i < artist.length; i++){
            const element = artist [i];
            console.log(element);
        }

        for (let i = 0; i < nummers.length; i++) {
            nummers [i] += 1;
            console.log(i + ": "+ nummers [i]);
        }

    }
}

let app = new App();
app.runApplication();





