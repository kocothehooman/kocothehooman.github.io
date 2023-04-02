function trigger50(){
    hints[0] = true
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
  
function triggerAudience(){}

function triggerCall(){}  