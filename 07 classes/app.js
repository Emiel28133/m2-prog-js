class Greet
{
    constructor()
    {
        this.greeting = "Greetings!";
    }

    showGreeting()
    {
        console.log("Greeting van binnen: " +this.greeting);
    }
}

class GoodBye
{
    constructor()
    {
        this.farewell = "Bye Bye!"
    }

    showBye()
    {
        console.log("farewell van binnen :" +this.farewell);
    }
}

let greet = new Greet();
let bye = new GoodBye();

console.log("Greeting van buiten: " +greet.greeting);
console.log("farewell van buiten: " +bye.farewell);

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

