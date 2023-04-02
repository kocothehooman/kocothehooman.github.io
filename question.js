function shuffle(array) {
    let m = array.length, t, i;
    let idx = 3;
    while (m) {
      i = Math.floor(Math.random() * m--);
      if(idx == m){
        idx = i
    }else if(idx == i){
        idx = m
    }
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    array.push(idx)
    return array;
  }
class question{
    constructor(q,a1,a2,a3,ac) {
        this.quest = q;
        this.shuff = shuffle([a1,a2,a3,ac])
        this.answer1 = this.shuff[0];
        this.answer2 = this.shuff[1];
        this.answer3 = this.shuff[2];
        this.answer4 = this.shuff[3];
        this.idx = this.shuff[4];        
    }
}