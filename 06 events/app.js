class App {
    runApplication() {
        console.log("Hello world");

        let uiButton = document.getElementById("myButton");
        let extraButton = document.getElementById("extraButton");
        let clickableDiv = document.getElementById("clickableDiv");

        uiButton.addEventListener("click", () => {

            let newParagraph = document.createElement("p");
            newParagraph.textContent = "This is a new paragraph!";
            document.body.appendChild(newParagraph);
        });

        extraButton.addEventListener("click", () => {

            let newHeader = document.createElement("h1");
            newHeader.textContent = "New Header";

            let newParagraph = document.createElement("p");
            newParagraph.textContent = "This is a new paragraph with your own text.";

            let newImage = document.createElement("img");
            newImage.src = "path/to/your/image.jpg";

            document.body.appendChild(newHeader);
            document.body.appendChild(newParagraph);
            document.body.appendChild(newImage);
        });

        clickableDiv.addEventListener("click", () => {

            let newHeader = document.createElement("h1");
            newHeader.textContent = "Clicked a div";


            let newButton = document.createElement("button");
            newButton.textContent = "New Button";

            document.body.appendChild(newHeader);
            document.body.appendChild(newButton);
        });
    }
}

let app = new App();
app.runApplication();