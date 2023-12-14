function globalFunction()
{
    console.log("ik ben global dus je ka me altijd aanroepen")
    
}

globalFunction()
globalFunction()
globalFunction()

class App {
    runApplication() 
    {
        console.log("Hello world");
        globalFunction()
        // code gaat hier!
    }
}

let app = new App();
app.runApplication();
