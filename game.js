window.onload = function(){
  function * luckyDraw(minTime,percent){
    let time = 0
    let luckyNum = 10*percent
    while(1){
      let randomNum = Math.random()*10
      if(time<minTime){
        if(randomNum<luckyNum){
          alert('恭喜您中奖了')
          time = 0
        }else{
          alert('您未中奖，请再接再厉')
        }
      }else{
        alert('恭喜您中奖了')
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