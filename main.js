Peter_pan_song="";
Harry_Potter_song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWristX=0;
scorerightWristY=0;
song="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);

}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
    
function draw(){
    image(video,0,0,600,500);

    fill("#FF000")
    stroke("#FF000")
    circle(rightWristX,rightWristY,20)
}
function gotposes(result){
    if(result.length>0){
        console.log(result)
        scoreLeftWristX=result[0].pose.keypoints[9].score;
        scorerightWristY=result[0].pose.keypoints[10].score
        console.log("scoreLeftWristX="+scoreLeftWristX+"scorerightWristY="+scorerightWristY)
        leftWristX=result[0].pose.leftWrist.x
        leftWristY=result[0].pose.leftWrist.y
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY)

        rightWristX=result[0].pose.rightWrist.x
        rightWristY=result[0].pose.rightWrist.y
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY)


    }
}