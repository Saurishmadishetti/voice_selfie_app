var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){ 
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    }
      recognition.onresult = function(event) 
      { //console.log('dingdong');
        console.log(event); 
        var Content = event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
        if(Content=="take my selfie"){
        speak();
        }
      }
function speak(){
var s=window.speechSynthesis;
speak_data="taking your selfie in 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speak_data);
s.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
 take_snapshot();
 save(); 
},5000);
}
function save(){
link=document.getElementById("link");
img=document.getElementById("selfie").src;
link.href=img;
link.click();
}
Webcam.set({
width:350,
height:250,
image_format:"png",
png_quality:90
});
camera=document.getElementById("cam")
function take_snapshot(){
  Webcam.snap(function (data_uri){
    document.getElementById("pic").innerHTML="<img id='selfie' src='" + data_uri + "'>";
  });
};