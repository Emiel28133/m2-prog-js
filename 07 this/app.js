class App {
    runApplication() {
        console.log("Hello world");

        let user1 = new User("michael");
        let user2 = new User("jacob");
        let user3 = new User("greta");
        let user4 = new User("klaas");
        let user5 = new User("jacobine");
        let user6 = new User("stefan");


        user6.wieBenIk(); // stefan
        user5.wieBenIk(); // jacobine
        user2.wieBenIk(); // jacob
        user3.wieBenIk(); // greta
        user1.wieBenIk(); // michael
        user6.wieBenIk(); // stefan
        user4.wieBenIk(); // greta
        user2.wieBenIk(); // jacob
        user3.wieBenIk(); // greta
        user2.wieBenIk(); // jacob
        // ik had alles goed 
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    wieBenIk() {
        console.log(this.name)
    }
}



let app = new App();
app.runApplication();