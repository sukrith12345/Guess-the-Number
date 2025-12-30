//selecting the input box.paragraph

var guessno=document.getElementById("guessno")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomNumber=Math.floor(Math.random()*10)+1
var totalscore=10

function check(){
   var enterdnumber =guessno.value
    if(randomNumber==enterdnumber){
      console.log("right")
      result.textContent="right";
      alert("you win....")
    }
    else{
      totalscore=totalscore-1
      score.textContent="score:"+totalscore
      result.textContent="wrong";
    }
}
