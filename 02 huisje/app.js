class App 
{
    runApplication() 
    {
        console.log("hello world")
        //code gaat hier
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(70,20);
        g.lineTo(80,30);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightgrey";
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(300,375);
        g.lineTo(400,400);
        g.lineTo(400,500);
        g.lineTo(300,475);
        g.closePath();
        g.stroke();
        g.fill();




        
       
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();
