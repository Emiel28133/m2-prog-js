class App {
    runApplication() {
        console.log("hello world")
        // code goes here
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        // Drawing the house
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300, 100);
        g.lineTo(700, 200);
        g.lineTo(600, 400);
        g.lineTo(200, 300);
        g.closePath();
        g.stroke();
        g.fill();

        // Drawing the roof
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700, 200);
        g.lineTo(800, 300);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        // Drawing the right side of the house
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600, 400);
        g.lineTo(800, 300);
        g.lineTo(800, 500);
        g.lineTo(600, 600);
        g.closePath();
        g.stroke();
        g.fill();

        // Drawing the left side of the house
        g.beginPath()
        g.fillStyle = "lightgrey";
        g.moveTo(200, 300);
        g.lineTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(200, 500);
        g.closePath();
        g.stroke();
        g.fill();

        // Drawing a window with perspective
        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(450, 250); // Top-left corner
        g.lineTo(500, 250); // Top-right corner
        g.lineTo(520, 300); // Bottom-right corner
        g.lineTo(470, 300); // Bottom-left corner
        g.closePath();
        g.stroke();
        g.fill();

        console.log(canvas);
    }
}

let app = new App();
app.runApplication();
