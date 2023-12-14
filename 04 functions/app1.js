function argumentsAreHandy(shoutout)
{
    console.log("do u want to give a shoutout?");
    console.log(shoutout)
}

argumentsAreHandy()
argumentsAreHandy("ik ben cool!")
argumentsAreHandy("wist je dat?")

function globalFunction()
{
    console.log("ik ben global dus je ka me altijd aanroepen");
    
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
