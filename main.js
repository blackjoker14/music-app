song = "";

function preload(){
    song = loadSound("happy-day-113985.mp3")
}

function setup() {
    canvas = createCanvas(500, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
  song.play();
}
