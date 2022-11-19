song = "";

scoreLeftWrist = 0;

leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;




function preload(){
    song = loadSound("happy-day-113985.mp3")
}

function setup() {
    canvas = createCanvas(500, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, mobelLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if(results.lenth > 0){
        console.log(results);
        scoreLeftWrist = results[0].keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX + "  leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX + "  rightWrist = " + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("Volume").innerHTML = "Volume =" + volume;
    song.setVolume(Volume);
}
}

function play(){
  song.play();
  song.setVolmne(1);
  song.rate(1);
}
