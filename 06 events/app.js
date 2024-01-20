class App {
    runApplication() {
        console.log("Hello world");

        let uiButton = document.getElementById("myButton");

        
        uiButton.addEventListener("click",(e)=>
        {
            console.log("click!");
        });

        
        
    }
}

let app = new App();
app.runApplication();
