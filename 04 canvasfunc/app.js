class App 
{
    runApplication() 
    {
        console.log("hello world")
        //code gaat hier
       
    
        this.tekenKertBoom();

        console.log(canvas)
    }

    tekenHuis()
    { 
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        let x = 20;
        let y = 20;


        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(70+x,20+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.lineTo(80+x,50+y);
        g.lineTo(60+x,60+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightgrey";
        g.moveTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.lineTo(20+x,50+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(30+x,37.5+y);
        g.lineTo(40+x,40+y);
        g.lineTo(40+x,50+y);
        g.lineTo(30+x,47.5+y);
        g.closePath();
        g.stroke();
        g.fill();

    }



    tekenKertBoom() {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
    
        // Random coordinates for decorations
        let rand1 = Math.random() * 10 + 45;  
        let rand2 = Math.random() * 30 + 20;  
        let rand3 = Math.random() * 40 + 30;  
    
        console.log(rand1);
        console.log(rand2);
        console.log(rand3);
    
        // Tree trunk
        g.beginPath();
        g.fillStyle = "brown";
        g.fillRect(45, 70, 10, 20);
        g.closePath();
    
        // Tree
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(50, 20);
        g.lineTo(70, 70);
        g.lineTo(30, 70);
        g.closePath();
        g.fill();
    
        // Decorations
        g.beginPath();
        g.fillStyle = "red";
        g.arc(rand1, rand2, 5, 0, 2 * Math.PI);
        g.fill();
    
        g.beginPath();
        g.fillStyle = "red";
        g.arc(rand2, rand3, 5, 0, 2 * Math.PI);
        g.fill();
    
        g.beginPath();
        g.fillStyle = "red";
        g.arc(rand3, rand1, 5, 0, 2 * Math.PI);
        g.fill();
    }
    
}

let app = new App();
app.runApplication();
