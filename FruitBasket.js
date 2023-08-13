img = "";
status = "";
objects = [];


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();   
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    
}

function preload() {
    img = loadImage("fruitBasket.jpg");
}

function draw() {
    
    if (status != undefined) {
        image(img, 0, 0, 640, 420);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status - Object Detected";
            document.getElementById("result").innerHTML = "CocoSSD has detected " + objects.length + " objects"
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded() {
    console.log("CocoSSD is initialized");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;

    }
}

function back() {
    window.location = "index.html";
}