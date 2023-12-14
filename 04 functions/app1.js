function eenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = eenResultaat();
console.log(hetResultaat);
console.log(eenResultaat());

let x =9;
let a =3;
let b =4;
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x, a, b, c)
{
   
    let y = (a*(x*x) )+ (b*x) +c;

    return y;   
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function ax2bcWiskunde2()
{
    let d =5;
    let e =8;
    let f =19;
    let g =123;
    let h = (g*(g+d))+ ((f+e)*f) -g;
    return h;
}
ax2bcWiskunde2();



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

    newClassFunction()
    {
        console.log("hello world in the newClassFunction")

    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }

}
let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");
