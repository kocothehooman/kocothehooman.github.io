function aS(a){
    return new Audio("sounds/" + a);
}
function stopAudio(sound){
        sound.currentTime = 0;
        sound.pause();
}
function isSoundPlaying(sound){
    if(!sound.paused && sound.duration > 0){
        return true
    }else{
        return false
    }
}
function clearAudio(){
    stopAudio(correctAnsSound1)
    stopAudio(correctAnsSound2)
    stopAudio(WaitAnsSound)
}