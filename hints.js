function trigger50(){
    hints[0] = 1
    let idx = currQuest.idx
    let arr = [0,1,2,3]
    arr[3] = idx
    arr[idx] = 3
    let choice;
  
  
      choice = Math.floor(Math.random()*3)
      let temp = arr[choice]
      arr[choice] = arr[2]
      arr[2] = temp
     
      choice = Math.floor(Math.random()*2)
  
      meti[0] = arr[2]
      meti[1] = arr[choice]
  }
  
function triggerAudience(sv){
  sando[0] = parseFloat(Math.random().toPrecision(2))
  sando[1] = parseFloat(Math.random().toPrecision(2))
  sando[2] = parseFloat(Math.random().toPrecision(2))
  sando[3] = parseFloat(Math.random().toPrecision(2))
  isAudience = true
  AudienceTime = 1000
  stopAudio(backgroundSound[currSound])
  backgroundSound[5].volume = 0.5
  backgroundSound[5].play()
  if(!sv){

  }else{}
}

function triggerCall(){}  