class App {
    runApplication() {
        console.log("Hello world");

        const artist = ["Slipknot,", "Ghost", "Type o negative", "Marilyn manson", "Sisters of mercy", "christian death", "Killing joke", "guns n roses", "led zepplin"];
        const nummers = [2, 5, 7];

        let indexToRemove = artist.indexOf("bob dylan");
        artist.splice(indexToRemove, 1);

        indexToRemove = artist.indexOf("prince");
        artist.splice(indexToRemove, 1);

        for (let i = 0; i < artist.length; i++) {
            const element = artist[i];
            console.log(element);
        }

        for (let i = 0; i < nummers.length; i++) {
            nummers[i] += 1;
            console.log(i + ": " + nummers[i]);
        }

        let headersByClass = document.getElementsByClassName("BandName");

        for (let piss = 0; piss < headersByClass.length; piss++) {
            
            console.log(headersByClass[piss].innerText);
        }

        for (let i = 0; i < headersByClass.length; i++) {
            headersByClass[i].innerText = "huh????";
        }

        headersByClass[0].innerText = "niews";
        headersByClass[1].innerText = "reviews";
        headersByClass[2].innerText = "commentaar";
        headersByClass[3].innerText = "Opinions";
        headersByClass[4].innerText = "Features";
        headersByClass[5].innerText = "Interviews";
        headersByClass[6].innerText = "Analysis";
        headersByClass[7].innerText = "ik wil";
        headersByClass[8].innerText = "naar huis";
    }
}

let app = new App();
app.runApplication();
