var patterndot = new Image();
patterndot.src = "images/dot3.png"
var audiencebcg = new Image();
audiencebcg.src = "images/publika-bcg-noborder.png"

function background(bcg){
    drawImage(bcg,0,0,1920/offs,1080/offs)//canvas.width,canvas.height)
}

function stoinosti(){
    context.fillStyle = 'white'
    context.font = 30/offs + 'px Intro'
    let metrics = context.measureText("10.00")
    let length = metrics.width;
    context.fillText("00.01",286/offs - length/2,181/offs)//1*/
    context.fillText("00.05",286/offs + 150/offs - length/2,181/offs)//2
    context.fillText("00.10",286/offs + 300/offs - length/2,181/offs)//3
    context.fillText("00.20",286/offs + 450/offs - length/2,181/offs)//4
    context.fillText("00.50",286/offs + 600/offs - length/2,181/offs)//5
    context.fillText("01.00",286/offs + 750/offs - length/2,181/offs)//6
    context.fillText("02.00",286/offs + 900/offs - length/2,181/offs)//7
    context.fillText("04.00",286/offs + 1050/offs - length/2,181/offs)//8
    context.fillText("07.00",286/offs + 1200/offs - length/2,181/offs)//9
    context.fillText("10.00",286/offs + 1350/offs - length/2,181/offs)//10*/
}

function abcd(){
    context.font = 72/offs + "px Intro"
    context.fillStyle = "white"
    context.fillText("A",330/offs,769/offs);
    context.fillText("C",330/offs,919/offs);
    context.fillText("B",1554/offs,769/offs)
    context.fillText("D",1554/offs,919/offs)
}

function centeredText(cx,sy,fs,text,bsy,mxX,margX,color){
    //cx = centered x
    //sy = y to drw
    //fs - fontsize

    context.font = fs + 'px Intro'
    if(color == undefined){
    context.fillStyle = 'white'
    }else{
    context.fillStyle = color
    }
    let metricheight = context.measureText("тест")
    let metrics = context.measureText(text)
    let width = metrics.width;
    let actualHeight = metricheight.actualBoundingBoxAscent +  metricheight.actualBoundingBoxDescent;
    let calcmarg = (bsy-actualHeight)/2
    if(width > (mxX - 2*margX)){
        let temp = (width/(mxX-margX*2))
        let length = text.length;
        let ind = length/2
        if(temp > 2.5){

            temp /= 0.95 
          while(text.charAt(ind) != " "){
              if(ind>0){
                  ind--;
              }else{
                  break;
              }
          }
      context.font =  fs/(temp/2) + "px Intro"
      let str = text.slice(0,ind)
      let str2 = text.slice(ind)//vzima vtorata polovina
      
      let metr = context.measureText(str)
      let wid = metr.width
      let metr2 = context.measureText(str2)
      let wid2 = metr2.width
      let temp2 = 1
      if(wid > (mxX-margX*2) ){
        temp2 = (wid/(mxX-margX*2))
      }else if( wid2 > (mxX-margX*2)){
        temp2 = (wid2/(mxX-margX*2))
      }
      context.font =  fs/(temp/2)/temp2 + "px Intro"
          metr = context.measureText(str)
          metr2 = context.measureText(str2)
          wid = metr.width
          wid2 = metr2.width
          let metrR = context.measureText("тест")
          let actH = metrR.actualBoundingBoxAscent +  metrR.actualBoundingBoxDescent
        let margY = actH/0.90
        calcmarg = (bsy-(actH*2+margY))/2


          context.fillText(str,cx + mxX/2 - wid/2,sy + bsy- actH - margY  - calcmarg)
          context.fillText(str2,cx + mxX/2 - wid2/2,sy + bsy - calcmarg)
      }else{
      context.font =  fs/temp + "px Intro"
      metricheight = context.measureText("тест")
      actualHeight = metricheight.actualBoundingBoxAscent +  metricheight.actualBoundingBoxDescent;
      calcmarg = (bsy-actualHeight)/2
      context.fillText(text,cx + margX,sy + bsy - calcmarg)
      }
        /*if(temp > 2.5){
            temp /= 0.95
            let ind = length/2
            while(text.charAt(ind) != " "){
                if(ind>0){
                    ind--;
                }else{
                    break;
                }
            }
            context.font =  fs/(temp/2) + "px Intro"
            let str = text.slice(0,ind)
            let str2 = text.slice(ind)//vzima vtorata polovina
            let metrR = context.measureText("тест")
            let metr = context.measureText(str)
            let actH = metrR.actualBoundingBoxAscent +  metrR.actualBoundingBoxDescent
            let margY = actH/0.90
            calcmarg = (bsy-(actH*2+margY))/2
            let wid = metr.width
            let metr2 = context.measureText(str2)
            let wid2 = metr2.width
            context.fillText(str,cx + mxX/2 - wid/2,sy + bsy- actH - margY  - calcmarg)
            context.fillText(str2,cx + mxX/2 - wid2/2,sy + bsy - calcmarg)
            //console.log(text,mxX,wid,wid2)
        }else{
        context.font =  fs/temp + "px Intro"
        metricheight = context.measureText("тест")
        actualHeight = metricheight.actualBoundingBoxAscent +  metricheight.actualBoundingBoxDescent;
        calcmarg = (bsy-actualHeight)/2
        context.fillText(text,cx + margX,sy + bsy - calcmarg)
        }*/
    }else{
        context.fillText(text,cx + mxX/2 - width/2,sy + bsy - calcmarg)
    }
}

function textbox(x,y,sts){
    context.beginPath();
    context.shadowBlur = 20/offs;
    context.shadowColor ="rgba(0, 0, 0, .6)";
    context.roundRect(x,y,tsx,tsy,10/offs)
    context.strokeStyle = 'white'
    context.lineWidth = 12/offs
    context.stroke();
    let gradi = context.createLinearGradient(x,y,x,y+tsy);
    if(sts == 0){
        //sinio
    gradi.addColorStop(0,'#2d1192')
    gradi.addColorStop(1,'#1f0857')
    }else if(sts == 1){
        //julto
        gradi.addColorStop(0,'#dcba1a')
        gradi.addColorStop(1,'#a88014')
    }else if(sts == 3){
        //cherveno
        gradi.addColorStop(0,'#ba1515')
        gradi.addColorStop(1,'#780f0f')
    }else if(sts == 2){
        //zeleno
        gradi.addColorStop(0,'#119220')
        gradi.addColorStop(1,'#0f7834')
    }
    context.fillStyle = gradi
    context.fill()
    
}
function questbox(){
    context.beginPath()
    context.shadowBlur = 20/offs;
    context.shadowColor ="rgba(0, 0, 0, .6)";
    context.roundRect(qx,qy,qsx,qsy,10/offs)
    context.strokeStyle = 'white'
    context.lineWidth = 12/offs
    context.stroke()
    let gradi = context.createLinearGradient(qx,qy,qx,qy+qsy);
    gradi.addColorStop(0,'#2d1192')
    gradi.addColorStop(1,'#1f0857')
    context.fillStyle = gradi
    context.fill()
    let ptrn = context.createPattern(patterndot,'repeat')
    context.fillStyle = ptrn
    context.fill()
}
function startbutton(){
    context.beginPath()
    context.shadowBlur = 20/offs;
    context.shadowColor ="rgba(0, 0, 0, .6)";
    context.roundRect(Sx,Sy,Ssx,Ssy,5/offs)
    context.strokeStyle = 'white'
    context.lineWidth = 10/offs
    context.stroke()
    let gradi = context.createLinearGradient(Sx,Sy,Sx,Sy+Ssy);
    if(!isTrigg){
    gradi.addColorStop(0,'#421192')
    gradi.addColorStop(1,'#330857')
    }else{
        //julto
        gradi.addColorStop(0,'#dcba1a')
        gradi.addColorStop(1,'#a88014')
    }
    context.fillStyle = gradi
    context.fill()
}
function rewardBoxlvl(lvl){
    spr = 150/offs*(lvl-1)
    if(lvl == 9){
        spr += 16/offs
    }
    context.beginPath();
    if(lvl != 0){
    context.roundRect(rx,ry,25/offs + spr,rsy,5/offs)
    }
    context.fillStyle = '#119220'
    context.fill()
}
function rewardBox(){
    context.beginPath();
    context.shadowBlur = 0
    context.shadowColor ="rgba(0, 0, 0, .6)";
    context.roundRect(rx,ry,rsx,rsy,5/offs)
    context.lineWidth = 12/offs
    context.strokeStyle = 'white'
    context.stroke();
    context.fillStyle = "#DCBA1A"
    context.fill();
}


function rewardArc(x,y,iS){
    context.fillStyle = "white"
    drawCircle(x,y,7.5/offs,true)
    if(iS){
    context.fillStyle = "#119220"
    drawCircle(x,y,4.5/offs,true)
    }
}
function hintArc(x,y,photo,sts){
    let radius = 56/offs
    let gradi = context.createLinearGradient(x-radius,y - radius,x-radius,y + radius);
    context.shadowBlur = 20/offs;
    context.shadowColor ="rgba(0, 0, 0, .6)";
    if(sts == 0){
        //sinio
    gradi.addColorStop(0,'#2d1192')
    gradi.addColorStop(1,'#1f0857')
    }else if(sts == 1){
        //julto
        gradi.addColorStop(0,'#dcba1a')
        gradi.addColorStop(1,'#a88014')
    }else if(sts == 2){
        //cherveno
        gradi.addColorStop(0,'#ba1515')
        gradi.addColorStop(1,'#780f0f')
    }
    context.fillStyle = gradi
    context.lineWidth = 12/offs
    let calc = 62/offs
    drawCircle(x,y,radius,false)
    drawCircle(x,y,radius,true)
    drawImage(photo,x-calc,y-calc,125/offs,125/offs)
}

function AudienceArc(){
    let radius = 87/offs
    let x = 952/offs
    let y = 182/offs
    let gradi = context.createLinearGradient(x-radius,y - radius,x-radius,y + radius)
    gradi.addColorStop(0,'#2d1192')
    gradi.addColorStop(1,'#1f0857')
    context.fillStyle = gradi
    context.lineWidth = 12/offs
    drawCircle(x,y,radius,false)
    drawCircle(x,y,radius,true)
    drawImage(audience,858/offs,89/offs,188/offs,188/offs)
}

function AudienceElements(sv){
    context.fillStyle = "white"
    context.font = "80px Intro"
    let y;
    if(sv){
     y = 635/offs
}else{
     y = 735/offs
}
    context.fillRect(710/offs,y,500/offs,15/offs)
    context.fillText("A",740/offs,y + 100/offs)
    context.fillText("B",870/offs,y + 100/offs)
    context.fillText("C",1000/offs,y + 100/offs)
    context.fillText("D",1130/offs,y + 100/offs)
}

function FinalAnswer(id){
    st[id] = 1
    if(currLevel > 4){
        stopAudio(backgroundSound[currSound])
        currSound = 4
        backgroundSound[currSound].play();
      }
}