window.onload = function(){
  function * luckyDraw(minTime,percent){
    let time = 0
    let luckyNum = 10*percent
    while(1){
      let randomNum = Math.random()*10
      if(time<minTime){
        if(randomNum<luckyNum){
          console.log(randomNum,luckyNum)
          time = 0
        }else{
          console.log(randomNum,luckyNum)
        }
      }else{
        console.log(randomNum,luckyNum)
        time = 0
      }
      yield time++
    }
  }
  // 假设10次保底，中奖概率为10%
  let Draw = luckyDraw(10,0.1)
  let btn = window.document.getElementById('btn')
  btn.addEventListener('click',()=>{
    Draw.next()
  })
}