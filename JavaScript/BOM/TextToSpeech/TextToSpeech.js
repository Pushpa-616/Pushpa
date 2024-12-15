let textToSpeech=()=>{
    let input=document.getElementById("text").value
    let speech=new SpeechSynthesisUtterance(input)
    speechSynthesis.speak(speech)
}