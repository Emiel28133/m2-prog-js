class App {
    runApplication() {
        console.log("Hello world");
        //code goes here!

        let uiButton = document.getElementById("myButton"); // Fixed the missing quotation marks around "myButton"

        let localFunction = function (e) { // Fixed the typo "console,log" to "console.log"
            console.log("click!");
        };

        uiButton.addEventListener("click", localFunction);
    }
}

let app = new App();
app.runApplication();
