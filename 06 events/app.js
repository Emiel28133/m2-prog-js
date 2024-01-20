class App {
    runApplication() {
        console.log("Hello world");
        

        let uiButton = document.getElementById("myButton"); 

        let localFunction = function (e) { 
            console.log("click!");
        };

        uiButton.addEventListener("click", localFunction);
    }
}

let app = new App();
app.runApplication();
