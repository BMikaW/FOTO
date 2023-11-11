var speech = window.webkitSpeechRecognition;

var recognition = new speech();

function Start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    console.log("carregou");
}

recognition.onresult = function(event) {

console.log(event);



}