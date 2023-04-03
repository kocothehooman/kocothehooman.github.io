// Creating variables
var pub = tryToLoad("publika-bcg","blue")
var win = tryToLoad("win","blue"),won = false
var lost = tryToLoad("lost","red")
var logo = tryToLoad("logo","red")
var bcg = tryToLoad('bcg','purple')
var start = tryToLoad("start","blue")
var uneedafifth = tryToLoad("5050","white")
var hinte = tryToLoad("podskazka","white")
var audience = tryToLoad("publika","white")
var st = [0,0,0,0]
var value = ["00.00",
"00.01",
"00.05",
"00.10",
"00.20",
"00.50",
"01.00",
"02.00",
"04.00",
"07.00",
"10.00"]
var questions = [
new question("Къде избухва преждевременно Априлското въстание?","Сливен","Пазарджик","Пловдив","Копривщица"),
new question("В кой български музей се съхранява Самарското знаме?","Национален исторически музей","Национален археологически музей","Национален природонаучен музей","Национален военноисторически музей"),
new question("На кой връх, четата на Христо Ботев води тежко сражение срещу превъзхождащата я османска армия?","Бузлуджа","Шипка","Ботев","Вола"),
new question("Как е наречена къщата, която служи за централа на Гюргевския революционен комитет?"," Парадайс мол","Мелницата","Бункера","Казармата"),
new question("На кого са думите „Ако вие, братя, сте биле истински патриоти и апостоли на свободата, то последвайте нашия пример и в Панагюрище...“","Георги Бенковски","Любен Каравелов","Стефан Стамболов","Тодор Каблешков"),
new question("Четата на кой въстаник е трябвало да бъде „навсякъде и никъде“?","Стоил Войвода","Георги Тумбев","Христо Ботев","Георги Бенковски"),
new question("Кой манастир е превърнат в своеобразна бойна крепост от четата на поп Харитон и Бачо Киро по време на въстанието?","Троянският","Чипровският","Бачковският","Дряновският"),
new question("Героичната съпротива в Перущица е сравнена с тази на кой град в одата „Кочо“ от Иван Вазов?","Рим","Константинопол","Атина","Спарта"),
new question("Кой европейски общественик се изразява в подкрепа на българите с думите: „Аз скърбя, че не мога лично да участвам във вашите боеве“?","Макгахан","Виктор Юго","Уинстън Чърчил","Джузепе Гарибалди"),
new question("Кое българско селище става за кратко свободна република?","Копривщица","Свищов","Жеравна","Ново Село")
]
var currLevel = localStorage.getItem("currLvl"),countdown = -1,ans = 0;
var isInAnim = false,isTrigg = false,isOnStart = (localStorage.getItem("strt") === 'true')
var meti = []
var hints = [localStorage.getItem("hint1"),localStorage.getItem("hint2"),localStorage.getItem("hint3")]
if(localStorage.getItem("currLvl") == null){
  currLevel = 0
  localStorage.setItem("currLvl",0)
}
if(localStorage.getItem("strt") == null){
  isOnStart = true
  localStorage.setItem("strt",true)
}
if(localStorage.getItem("hint1") == null){
  hints[0] = 0
  localStorage.setItem("hint1",0)
}
if(localStorage.getItem("hint2") == null){
  hints[1] = 0
  localStorage.setItem("hint2",0)
}
if(localStorage.getItem("hint3") == null){
  hints[2] = 0
  localStorage.setItem("hint3",0)
}
var currQuest = questions[currLevel];
//meti - 50/50, meti[] - koi otgovori mahame
//sando - publika
//fehti - hintove

// 0 - unused
// 1 - selected
// 2 - used

//[0] - 50/50
//[1] - publika
//[2] - zvunni na uchitel

var offs = 1//1.40625


var tx1 = 418/offs, tx2 = 1016/offs 
var ty1 = 693/offs, ty2 = 843/offs
var qx = 465/offs, qy = 493/offs
var qsx = 1000/offs, qsy = 150/offs
var tsx = 500/offs, tsy = 100/offs
var XmargA = 15/offs, YmargA = 23/offs
var XmargQ = 40/offs, YmargQ = 44/offs
var fsQ = 72/offs, fsA = 48/offs
var rx = 266/offs, ry=200/offs
var rsx = 1390/offs, rsy = 20/offs
var Ssx = 540/offs
var Ssy = 115/offs
var Sx = 1080/offs
var Sy = 483/offs
//s == 0 unselected
//s == 1 selected
//s == 2 right
//s == 3 wrong 


//ans - globalna promenliva za statea na otgovora
//ans == 0 - unselected
//ans == 1 - right
//ans == 2 - wrong
//ans == 3 - lost


var backgroundSound = [aS("intro.ogg"),aS("Q1-5_(Strachans)_-_Music.ogg"),aS("Q6_(Strachans)_-_Music.ogg"),aS("Millionaire_Closing.ogg"),aS("Q6-11_-_Final_Answer.ogg")]//aS funkciq v drawing
var correctAnsSound1 = aS("Q1-4_-_Yes.ogg")
var correctAnsSound2 = aS("Q6_-_Yes.ogg")
var WaitAnsSound = aS("Q6-11_-_Final_Answer.ogg")
var wrongSound1 = aS("Q1-5_-_wrong.ogg")
var wrongSound2 = aS("Q6-1_-_wrong.ogg")
var currSound = 0




function clearCh(a){
  if(a != 0){
    st[0] = 0;
    }
    if(a != 1){
    st[1]= 0;
    }
    if(a != 2){
      st[2] = 0;
      }
    if(a != 3){
      st[3] = 0;
      }
}

function lose(){
  ans = 2;
  countdown = 1000
  stopAudio(backgroundSound[currSound])
      currSound = 3
      if(currLevel > 4){
      wrongSound1.play();
      }else{
        wrongSound2.play();
      }
}


function update() {
  if(currSound != 0 && currSound != 3){
  if(backgroundSound[currSound].paused){
    backgroundSound[currSound].play();
  }
}
if(countdown >= 0){
  countdown --
}
if(countdown == 0){
  if(ans != 2 && ans != 3){
  if(won){
    stopAudio(backgroundSound[currSound])
    currSound = 3
    backgroundSound[currSound].volume = 0.5
    backgroundSound[currSound].play();
    localStorage.clear()
  }
  if(isTrigg){
    isTrigg = false
    isOnStart = false
    localStorage.setItem("strt",false)
    stopAudio(backgroundSound[0])    
    backgroundSound[1].volume = 0.5
    backgroundSound[1].play();
    currSound = 1
  }else{
    if(ans == 1){
      if(currLevel != questions.length-1){
      currLevel ++
      clearCh(5);
      localStorage.setItem("currLvl", currLevel)
      currQuest = questions[currLevel]
      //currQuest = questions[1]
      for(let i = 0;i<3;i++){
        if(hints[i] == 1){
          hints[i] = 2
          localStorage.setItem("hint" + (i+1),2)
        }
      }
      meti = []
      if(currSound == 4){
        stopAudio(backgroundSound[currSound])
      }
      if(currLevel == 5){
      stopAudio(backgroundSound[1])
      currSound = 2
      backgroundSound[currSound].volume = 0.5
      backgroundSound[currSound].play(); 
      }else if(currLevel > 5){
        currSound = 2
        backgroundSound[currSound].play(); 
      }
      
    }else{
      if(!won){
      won = true
      countdown = 10
      }
    }
    
        }
      }
    }else if(ans == 2){
      ans = 3
      localStorage.clear()
    }
  }
}








function draw() {
  if(isOnStart){
    drawImage(start,0,0,1920/offs,1080/offs)
    startbutton()
    centeredText(Sx,Sy,90/offs,"START",Ssy,Ssx,10)
  }else if(!won && ans != 3){
  if(!isInAnim){
    background(bcg)
    questbox()//*/
    centeredText(qx,qy,fsQ,currQuest.quest,qsy,qsx,XmargQ)
    drawImage(logo,860/offs,270/offs,200/offs,200/offs)
    abcd();

    if(meti[0] != 0 && meti[1] != 0){
    textbox(tx1,ty1,st[0])
    centeredText(tx1,ty1,fsA,currQuest.answer1,tsy,tsx,XmargA)
    }

    if(meti[0] != 1 && meti[1] != 1){
    textbox(tx2,ty1,st[1])
    centeredText(tx2,ty1,fsA,currQuest.answer2,tsy,tsx,XmargA)
    }

    if(meti[0] != 2 && meti[1] != 2){
    textbox(tx1,ty2,st[2])
    centeredText(tx1,ty2,fsA,currQuest.answer3,tsy,tsx,XmargA)
    }

    if(meti[0] != 3 && meti[1] != 3){
    textbox(tx2,ty2,st[3])
    centeredText(tx2,ty2,fsA,currQuest.answer4,tsy,tsx,XmargA)
    }


    rewardBox()
    rewardBoxlvl(currLevel)

    for(let i = 0;i<10;i++){
      let fill = false;
      if(i == currLevel){
        fill = true
      }
      rewardArc(286/offs + i*150/offs,248/offs,fill)
    }
    if(hints[1] == 1){
      drawImage(pub,286,168)
    }
    hintArc(137/offs,390/offs,uneedafifth,hints[0]);
    hintArc(137/offs,540/offs,audience,hints[1]);
    hintArc(137/offs,690/offs,hinte,hints[2]);


// 62 - radius
    stoinosti();
  }
}else if(won){
  drawImage(win,0,0,1920/offs,1080/offs)
}else if(ans == 3){
  drawImage(lost,0,0,1920/offs,1080/offs)
  centeredText(5/offs,379/offs,60/offs,"Ти спечели " + value[currLevel] + "ЛВ.",51,1920/offs,1,"#003acc");

  centeredText(0,374/offs,60/offs,"Ти спечели " + value[currLevel] + "ЛВ.",51,1920/offs);
}
/*
  context.fillStyle='white'
  context.fillRect(10,10,10,10)//*/
};










function keyup(key) {
    if(key == 78){//n
      localStorage.clear()
    }
    if(key == 77){
      if(isOnStart){
        isTrigg = true
        countdown = 1
      }
    }
};











function mouseup() {
  if(isOnStart){
    if(areColliding(Sx,Sy,Ssx,Ssy,mouseX,mouseY,1,1)){
    if(!isTrigg){
      isTrigg = true
      countdown= 3166
      backgroundSound[0].volume = 0.50
      backgroundSound[0].play()
    }
    /*else{
      isOnStart = false
      localStorage.setItem("strt",false)
    }//*/
  }
  }else if(!won){
    if(ans != 2 && ans != 3){
  if(countdown < 0){
    if(meti[0] != 0 && meti[1] != 0){
    if(areColliding(tx1,ty1,tsx,tsy,mouseX,mouseY,1,1)){
      clearCh(0);
      if(st[0] == 0 || st[0] == 2){
        st[0] = 1 
        if(currLevel > 4){
          stopAudio(backgroundSound[currSound])
          currSound = 4
          backgroundSound[currSound].play();
          //WaitAnsSound.play();
        }
      }else {
        if(currQuest.idx == 0){
          if(currLevel < 4){
            correctAnsSound1.play();
          }else{
            clearAudio();
            if(currLevel != 9){
              correctAnsSound2.play();
              }
          }
          ans = 1
        }else{
        st[0] = 3;
        lose()
        }
        st[currQuest.idx] = 2;
        countdown = 100
      }
    }
  }
  if(meti[0] != 1 && meti[1] != 1){
    if(areColliding(tx2,ty1,tsx,tsy,mouseX,mouseY,1,1)){
      clearCh(1);
      if(st[1] == 0 || st[1] == 2){
        st[1] = 1
        if(currLevel > 4){
          stopAudio(backgroundSound[currSound])
          currSound = 4
          backgroundSound[currSound].play();
          //WaitAnsSound.play();
        }
      }else {
        if(currQuest.idx == 1){
          if(currLevel < 4){
            correctAnsSound1.play();
          }else{
            clearAudio();
            if(currLevel != 9){
              correctAnsSound2.play();
              }
          }
          ans = 1
        }else{
        st[1] = 3;
        lose()
        }
        st[currQuest.idx] = 2;
        countdown = 100
      }
    }
  }
  if(meti[0] != 2 && meti[1] != 2){
    if(areColliding(tx1,ty2,tsx,tsy,mouseX,mouseY,1,1)){
      clearCh(2);
      if(st[2] == 0 || st[2] == 2){
        st[2] = 1
        if(currLevel > 4){
          stopAudio(backgroundSound[currSound])
          currSound = 4
          backgroundSound[currSound].play();
          //WaitAnsSound.play();
        }
      }else {
        if(currQuest.idx == 2){
          if(currLevel < 4){
            correctAnsSound1.play();
          }else {
            clearAudio();
            if(currLevel != 9){
            correctAnsSound2.play();
            }
          }
          ans = 1
        }else{
        st[2] = 3;
        lose()
        }
        st[currQuest.idx] = 2;
        countdown = 100
      }
    }
  }
  if(meti[0] != 3 && meti[1] != 3){
    if(areColliding(tx2,ty2,tsx,tsy,mouseX,mouseY,1,1)){
      clearCh(3);
      if(st[3] == 0 || st[3] == 2){
        st[3] = 1 
        if(currLevel > 4){
          stopAudio(backgroundSound[currSound])
          currSound = 4
          backgroundSound[currSound].play();
          //WaitAnsSound.play();
        }
      }else {
        if(currQuest.idx == 3){
          if(currLevel < 4){
            correctAnsSound1.play();
          }else{
            clearAudio();
            if(currLevel != 9){
              correctAnsSound2.play();
              }
          }
          ans = 1
        }else{
        st[3] = 3;
        lose()
        }
        st[currQuest.idx] = 2;
        countdown = 250
        }
      }
    }




      // ----------------------------------------------------------------------hintove
    // 137,390 - 5050
    // 137,540 - publika
    // 137,690 - podskazka
      if(areArcsColliding(137/offs,390/offs,56/offs,mouseX,mouseY,1)  && hints[0] == 0){
        hints[0] = 1
        localStorage.setItem("hint1",1)
        trigger50()
      }
      if(areArcsColliding(137/offs,540/offs,56/offs,mouseX,mouseY,1)  && hints[1] == 0){
        hints[1] = 1
        localStorage.setItem("hint2",1)
        triggerAudience()
      }
      if(areArcsColliding(137/offs,690/offs,56/offs,mouseX,mouseY,1) && hints[2] == 0){
        hints[2] = 1
        localStorage.setItem("hint3",1)
        triggerCall()
      }
     }
    }
  }
}