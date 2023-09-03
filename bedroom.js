img1 = "";
status = "";
objects = [];

function preload() {
    img1 = loadImage("bedroom.jpg");  
}

function setup() {
    canvas = createCanvas(640, 600);
    canvas.position(625,250);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function draw() {
    if (status != undefined) { 
        image(img1, 0, 0, 640, 600);
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
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;

    }
}

function modelLoaded() {
    console.log("CocoSSD is initialized");
    status = true;
    objectDetector.detect(img1, gotResult);
}

function back() {
    window.location = "index.html";
}

// https://mahdihat791.github.io/projectSolutionC131-C133/