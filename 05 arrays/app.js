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

        headersByClass[0].innerText = "niews";
        headersByClass[1].innerText = "reviews";
        headersByClass[2].innerText = "commentaar";
        headersByClass[3].innerText = "Opinions";
        headersByClass[4].innerText = "Features";


        let data = ["niews", "reviews", "commentaar", "opinion", "features"];

        for (let i = 0; i < headersByClass.length && i < data.length; i++) {
            headersByClass[i].innerText = i + ": " + data[i];
            console.log(headersByClass[i].innerText)
        }

        


    }
}

let app = new App();
app.runApplication();
