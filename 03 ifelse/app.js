class App {
    runApplication() {
        console.log("Hello world");
        
        let title = document.getElementById("newstitle");
        console.log(title);
        let newsitem1 = document.getElementsByClassName("gamenews headline")[0]
        console.log(newsitem1)
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem2)

        let randomGetal = Math.random();
        console.log(randomGetal);
        if(randomGetal < 0.2)
        {
            console.log("kleiner");
            title.style.backgroundColor = "#FF0000";
            newsitem1.style.backgroundColor = "FFF000";
            newsitem2.style.backgroundColor = "#0000FF"
        }
        else if(randomGetal > 0.2 && randomGetal < 0.6)
        {
            console.log("2 tot 6")
            title.style.backgroundColor = "#800080";
            newsitem1.style.backgroundColor = "#FF0000"
            newsitem2.style.backgroundColor = "#FFF000"
        }
        else if(randomGetal > 0.6 && randomGetal < 0.75)
        {
            console.log("6 tot 7,5")
            title.style.backgroundColor = "#0000FF";
            newsitem1.style.backgroundColor = "#800080"
            newsitem2.style.backgroundColor = "#FF0000"
        }
        else if(randomGetal > 0.75)
        {
            console.log("groter")
            title.style.backgroundColor = "#FFF000";
            newsitem1.style.backgroundColor = "#0000FF"
            newsitem2.style.backgroundColor = "#800080"
        }
    }
}

let app = new App();
app.runApplication();
