class App {
    runApplication() {
        console.log("Hello World")

        let canvas = document.getElementById("canvasId");
        let context = canvas.getContext("2d");

        function drawCircle(x, y, radius, color) {
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();
            context.stroke();
        }

        for (var i = 0; i < 200; i++) {
            var randomX = Math.random() * canvas.width;
            var randomY = Math.random() * canvas.height;
            var randomRadius = Math.random() * 20 + 5;
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

            drawCircle(randomX, randomY, randomRadius, randomColor);
        }

        console.log("Canvas:", canvas);
    }
}

const myApp = new App();
myApp.runApplication();
