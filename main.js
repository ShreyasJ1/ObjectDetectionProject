bedroom = "";
status="";


function preload() {
    bedroom = loadImage("bedroom.avif");
    
}

function setup() {
    canvas = createCanvas(800,700);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - detecting objects"
}

function back() 
{  
    window.location = "index.html";
}

function modelLoaded() {
    
}

function modelLoaded() {
    console.log("CocoSSD is initialized");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}