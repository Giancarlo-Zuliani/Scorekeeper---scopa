// adding team name;
 var firstteamname= prompt('nomina la prima coppia')
 var secondteamname=prompt('nomina la seconda coppia')
//array list item points
var points1 =  document.querySelectorAll('#team1list li')
var points2 = document.querySelectorAll('#team2list li')
//starting index
var index = 0;
//total point
var count = document.querySelectorAll('.result')



//insert prompt team name in page
document.querySelector('#team1name').textContent = firstteamname
document.querySelector('#team2name').textContent = secondteamname
document.querySelector('#teamonename').textContent = firstteamname
document.querySelector('#teamtwoname').textContent = secondteamname

//reset button
document.getElementById('reset').addEventListener('click',function(){
  //pop up confirm
  var secure = confirm('cancellare tutto?')
  if(secure){
    count[0].style.color = "black"
    count[1].style.color = "black"
    //remove all list item content
  for (var i = index - 1; i >= 0; i--) {
    points1[i].textContent=""
    points2[i].textContent=""
  }
    //reset index to 0 for new game
    index = 0;
    //reset total count
    count[0].textContent = ""
    count[1].textContent = ""
  //reset teams names
  firstteamname = prompt('nomina la prima coppia')
  secondteamname = prompt('nomina la seconda coppia')
  document.querySelector('#team1name').textContent = firstteamname
  document.querySelector('#team2name').textContent = secondteamname
  document.querySelector('#teamonename').textContent = firstteamname
  document.querySelector('#teamtwoname').textContent = secondteamname
  //not sure i need this
  // secure != secure
  }});


//add points button
document.getElementById('adding').addEventListener('click',function(){
if (index < 6){
  //convert strings in numbers
  var score1 = parseInt(document.getElementById('addNum').value);
  var score2 = parseInt(document.getElementById('addNum2').value);
    //check if input is not a number then add 0 points
    if(isNaN(score1)){
      score1 = 0
    }
    if (isNaN(score2)){
      score2 = 0
    }
    //write down the points on list
  points1[index].textContent = score1
  points2[index].textContent = score2

  var total1 = 0
  var total2 = 0
  //refresh total adding the new points input
  for (var i = index ; i >= 0; i--) {
    total1 += parseInt(points1[i].textContent)
    total2 += parseInt(points2[i].textContent)
  }
  //write total on DOM
  count[0].textContent = total1
  count[1].textContent = total2
  //increment index for next point addition
  index++

  //check if it is the last round and check who win the game
    if(index == 6 ){
      if(total1 > total2){
        count[0].textContent +=" vittoria"
        count[0].style.color ="green";
        count[1].style.color = "red";
      }
      else if (total1<total2){
        count[1].textContent +=" vittoria"
        count[1].style.color ="green";
        count[0].style.color = "red"
      }else{
        alert('pareggio')
      }
    }}
})


//return button
document.querySelector('#undo').addEventListener('click',function(){
//check if there is something to undo
if(index > 0){
  //if the game was in the last round return the winner color to standard black
  if(index == 6){
    count[1].style.color ="black";
    count[0].style.color = "black"
  }
  //reduce index
  index--
  //remove the last points inputs from total count
  var reduce1 = parseInt(count[0].textContent) - parseInt(points1[index].textContent)
  count[0].textContent = reduce1
  var reduce2 = parseInt(count[1].textContent) - parseInt(points2[index].textContent)
  count[1].textContent =reduce2
  //clear the last points inputs from list
  points1[index].textContent=""
  points2[index].textContent=""
}
  else{
    alert('nothing to undo');
  }
})

//primiera calculator

document.getElementById('calcprim').addEventListener('click',function(){
    //sum all primiera value
  var primp1 = parseInt(document.querySelector('#den1').value) + parseInt(document.querySelector('#cop1').value) + parseInt(document.querySelector('#spad1').value) + parseInt(document.querySelector('#bas1').value);
  var primp2 = parseInt(document.querySelector('#den2').value) + parseInt(document.querySelector('#cop2').value) + parseInt(document.querySelector('#spad2').value) + parseInt(document.querySelector('#bas2').value);
  //write them to the DOM
  document.getElementById('tot1').textContent="  " + primp1
  document.getElementById('tot2').textContent="  " + primp2
  document.getElementById('tot1').style.color = "black";
  document.getElementById('tot2').style.color = "black";
  //find the bigger and give it the green winner color
  if(primp1 > primp2){
    document.getElementById('tot1').style.color = "green";
  }
  else if(primp2 > primp1){
    document.getElementById('tot2').style.color = "green";
  }
})

//reset button for Primiera calculator
document.querySelector('#calcprimreset').addEventListener('click',function(){
  document.getElementById('tot1').textContent =""
  document.getElementById('tot2').textContent =""
})


//this make Primiera calculator slide and rotate the arrow
var slider = document.querySelector('.slider');
slider.addEventListener('click',function(){
  let arrow = document.querySelector('i')
  var obg = document.querySelector('.primiera')
  obg.classList.toggle('moving');
  arrow.classList.toggle('rotate');
})
