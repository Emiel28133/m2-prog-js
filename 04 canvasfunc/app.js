class App 
{
    runApplication() 
    {
        console.log("hello world")
        //code gaat hier
       
    
        this.tekenKertBoom(100, 400);
        this.tekenKertBoom(370, 380);
        this.tekenKertBoom(150, 57);
        this.tekenHuis(120, 300);
        this.tekenHuis(350, 200);
        this.tekenHuis(400, 12);
        this.tekenHuis(400, 90);
        
        console.log(canvas)
    }

    tekenHuis(x, y)
    { 
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");



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



    tekenKertBoom(aa, bb) {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
        var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    

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
        g.fillRect(145 + aa, 70 + bb, 10, 20);
        g.closePath();
    
        // Tree
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(150 + aa, 20 + bb);
        g.lineTo(170 + aa, 70 + bb);
        g.lineTo(130 + aa, 70 + bb);
        g.closePath();
        g.fill();
    
        // Decorations
        g.beginPath();
        g.fillStyle = "#" + randomColor;
        g.arc(rand1 + 100 + aa, rand2 + bb, 5, 0, 2 * Math.PI);
        g.fill();
    
        g.beginPath();
        g.fillStyle = "#" + randomColor1;
        g.arc(rand2 + 100 + aa, rand3 + bb, 5, 0, 2 * Math.PI);
        g.fill();
    
        g.beginPath();
        g.fillStyle = "#" + randomColor2;
        g.arc(rand3 + 100 + aa, rand1 + bb, 5, 0, 2 * Math.PI);
        g.fill();
    }
    
}

let app = new App();
app.runApplication();
