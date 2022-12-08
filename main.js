var narizY=0
var narizX=0


function preload(){
 bigode=loadImage("https://i.postimg.cc/ZqKtDp3H/download-removebg-preview-1.png")
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

      poseNet=ml5.poseNet(video,modelLoaded)
      poseNet.on('pose',gotPoses)
 }
function modelLoaded(){
   console.log("modelo carregado")

}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nariz x=" +results[0].pose.nose.x)
        console.log("nariz y=" +results[0].pose.nose.y)
        narizX=results[0].pose.nose.x-20
        narizY=results[0].pose.nose.y
        
    }
}
function draw(){
    image(video,0,0,400,400);
  
    image(bigode,narizX, narizY,55,55)
    
}
function takeSnapshot(){
    save("bigodeAPP.png")
}
