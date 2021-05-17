let score = 0
let scoreCounter = 0
let mole = 0
let mallet = document.getElementById('mallet')
const onMouseMove = (e) => {
  mallet.style.left = e.pageX + 'px'
  mallet.style.top = e.pageY + 'px'
}
document.addEventListener('mousemove', onMouseMove)
document.getElementById('start').addEventListener('click', game)
document.getElementById('test').addEventListener('click', test)
function game() {
  scoreCounter = 0
  //mole = Math.floor((Math.random() * 16) + 1)
  mole = 1
  if (mole === 1) {
    document.getElementById("img1").style.display = 'inline'
    document.getElementById('blank1').style.display = 'none'
    document.getElementById('img1').addEventListener('click', yham)
    document.getElementById('img1').addEventListener('click', imgf1)
  } else if (mole === 2) {
    document.getElementById("img2").style.display = 'inline'
    document.getElementById('blank2').style.display = 'none'
    document.getElementById('img2').addEventListener('click', yham)
  } else if (mole === 3) {
    document.getElementById("img3").style.display = 'inline'
    document.getElementById('blank3').style.display = 'none'
    document.getElementById('img3').addEventListener('click', yham)
  } else if (mole === 4) {
    document.getElementById("img4").style.display = 'inline'
    document.getElementById('blank4').style.display = 'none'
    document.getElementById('img4').addEventListener('click', yham)
  } else if (mole === 5) {
    document.getElementById("img5").style.display = 'inline'
    document.getElementById('blank5').style.display = 'none'
    document.getElementById('img5').addEventListener('click', yham)
  } else if (mole === 6) {
    document.getElementById("img6").style.display = 'inline'
    document.getElementById('blank6').style.display = 'none'
    document.getElementById('img6').addEventListener('click', yham)
  } else if (mole === 7) {
    document.getElementById("img7").style.display = 'inline'
    document.getElementById('blank7').style.display = 'none'
    document.getElementById('img7').addEventListener('click', yham)
  } else if (mole === 8) {
    document.getElementById("img8").style.display = 'inline'
    document.getElementById('blank8').style.display = 'none'
    document.getElementById('img8').addEventListener('click', yham)
  } else if (mole === 9) {
    document.getElementById("img9").style.display = 'inline'
    document.getElementById('blank9').style.display = 'none'
    document.getElementById('img9').addEventListener('click', yham)
  } else if (mole === 10) {
    document.getElementById("img10").style.display = 'inline'
    document.getElementById('blank10').style.display = 'none'
    document.getElementById('img10').addEventListener('click', yham)
  } else if (mole === 11) {
    document.getElementById("img11").style.display = 'inline'
    document.getElementById('blank11').style.display = 'none'
    document.getElementById('img11').addEventListener('click', yham)
  } else if (mole === 12) {
    document.getElementById("img12").style.display = 'inline'
    document.getElementById('blank12').style.display = 'none'
    document.getElementById('img12').addEventListener('click', yham)
  } else if (mole === 13) {
    document.getElementById("img13").style.display = 'inline'
    document.getElementById('blank13').style.display = 'none'
    document.getElementById('img13').addEventListener('click', yham)
  } else if (mole === 14) {
    document.getElementById("img14").style.display = 'inline'
    document.getElementById('blank14').style.display = 'none'
    document.getElementById('img14').addEventListener('click', yham)
  } else if (mole === 15) {
    document.getElementById("img15").style.display = 'inline'
    document.getElementById('blank15').style.display = 'none'
    document.getElementById('img15').addEventListener('click', yham)
  } else if (mole === 16) {
    document.getElementById("img16").style.display = 'inline'
    document.getElementById('blank16').style.display = 'none'
    document.getElementById('img16').addEventListener('click', yham)
  }
  function yham() {
    score = score + 100
    if (score < 999) {
      scoreCounter = '000' + score
    } else if (score > 999) {
      scoreCounter = '00' + score
    }
    document.getElementById('score-counter').value = scoreCounter
  }
  function imgf1 () {
    mole = 0
    document.getElementById("img1").style.display = 'none'
    document.getElementById('blank1').style.display = 'inline'
  }
}

function test() {
  alert(scoreCounter)
}