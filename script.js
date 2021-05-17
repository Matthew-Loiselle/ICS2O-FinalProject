let score = 0
let counter = 0
let scoreCounter = 0
let mole = 0
let curday = 0
let curmonth = 0
let curyear = 0
let time = 0
let i = 0
let mallet = document.getElementById('mallet')
//get mouse coordinates and move mallet.png to it's location every time it moves
const onMouseMove = event => {
  mallet.style.left = event.pageX + 'px'
  mallet.style.top = event.pageY + 'px'
}
document.addEventListener('mousemove', onMouseMove)
document.getElementById('start').addEventListener('click', game)
document.getElementById('test').addEventListener('click', test)

function game() {
  counter = 0
  score = 0
  scoreCounter = 0
  document.getElementById('score-counter').value = '000000'
  for (i = 0; i < 5; i++) {
    mole = Math.floor((Math.random() * 16) + 1)
    if (mole === 1 || mole2 === 1 || mole3 === 1 || mole4 === 1) {
      document.getElementById("img1").style.display = 'inline'
      document.getElementById('blank1').style.display = 'none'
      document.getElementById('img1').addEventListener('click', yham)
      document.getElementById('img1').addEventListener('click', f1)
    } else if (mole === 2) {
      document.getElementById("img2").style.display = 'inline'
      document.getElementById('blank2').style.display = 'none'
      document.getElementById('img2').addEventListener('click', yham)
      document.getElementById('img2').addEventListener('click', f2)
    } else if (mole === 3) {
      document.getElementById("img3").style.display = 'inline'
      document.getElementById('blank3').style.display = 'none'
      document.getElementById('img3').addEventListener('click', yham)
      document.getElementById('img3').addEventListener('click', f3)
    } else if (mole === 4) {
      document.getElementById("img4").style.display = 'inline'
      document.getElementById('blank4').style.display = 'none'
      document.getElementById('img4').addEventListener('click', yham)
      document.getElementById('img4').addEventListener('click', f4)
    } else if (mole === 5) {
      document.getElementById("img5").style.display = 'inline'
      document.getElementById('blank5').style.display = 'none'
      document.getElementById('img5').addEventListener('click', yham)
      document.getElementById('img5').addEventListener('click', f5)
    } else if (mole === 6) {
      document.getElementById("img6").style.display = 'inline'
      document.getElementById('blank6').style.display = 'none'
      document.getElementById('img6').addEventListener('click', yham)
      document.getElementById('img6').addEventListener('click', f6)
    } else if (mole === 7) {
      document.getElementById("img7").style.display = 'inline'
      document.getElementById('blank7').style.display = 'none'
      document.getElementById('img7').addEventListener('click', yham)
      document.getElementById('img7').addEventListener('click', f7)
    } else if (mole === 8) {
      document.getElementById("img8").style.display = 'inline'
      document.getElementById('blank8').style.display = 'none'
      document.getElementById('img8').addEventListener('click', yham)
      document.getElementById('img8').addEventListener('click', f8)
    } else if (mole === 9) {
      document.getElementById("img9").style.display = 'inline'
      document.getElementById('blank9').style.display = 'none'
      document.getElementById('img9').addEventListener('click', yham)
      document.getElementById('img9').addEventListener('click', f9)
    } else if (mole === 10) {
      document.getElementById("img10").style.display = 'inline'
      document.getElementById('blank10').style.display = 'none'
      document.getElementById('img10').addEventListener('click', yham)
      document.getElementById('img10').addEventListener('click', f10)
    } else if (mole === 11) {
      document.getElementById("img11").style.display = 'inline'
      document.getElementById('blank11').style.display = 'none'
      document.getElementById('img11').addEventListener('click', yham)
      document.getElementById('img11').addEventListener('click', f11)
    } else if (mole === 12) {
      document.getElementById("img12").style.display = 'inline'
      document.getElementById('blank12').style.display = 'none'
      document.getElementById('img12').addEventListener('click', yham)
      document.getElementById('img12').addEventListener('click', f12)
    } else if (mole === 13) {
      document.getElementById("img13").style.display = 'inline'
      document.getElementById('blank13').style.display = 'none'
      document.getElementById('img13').addEventListener('click', yham)
      document.getElementById('img13').addEventListener('click', f13)
    } else if (mole === 14) {
      document.getElementById("img14").style.display = 'inline'
      document.getElementById('blank14').style.display = 'none'
      document.getElementById('img14').addEventListener('click', yham)
      document.getElementById('img14').addEventListener('click', f14)
    } else if (mole === 15) {
      document.getElementById("img15").style.display = 'inline'
      document.getElementById('blank15').style.display = 'none'
      document.getElementById('img15').addEventListener('click', yham)
      document.getElementById('img15').addEventListener('click', f15)
    } else if (mole === 16) {
      document.getElementById("img16").style.display = 'inline'
      document.getElementById('blank16').style.display = 'none'
      document.getElementById('img16').addEventListener('click', yham)
      document.getElementById('img16').addEventListener('click', f16)
    }
    document.getElementsByClassName
    function f1 () {
      counter++
      document.getElementById('img1').style.display = 'none'
      document.getElementById('blank1').style.display = 'inline'
    }
    function f2 () {
      counter++
      document.getElementById('img2').style.display = 'none'
      document.getElementById('blank2').style.display = 'inline'
    }
    function f3 () {
      counter++
      document.getElementById('img3').style.display = 'none'
      document.getElementById('blank3').style.display = 'inline'      
    }
    function f4 () {
      counter++
      document.getElementById('img4').style.display = 'none'
      document.getElementById('blank4').style.display = 'inline'
    }
    function f5 () {
      counter++
      document.getElementById('img5').style.display = 'none'
      document.getElementById('blank5').style.display = 'inline'
    }
    function f6 () {
      counter++
      document.getElementById('img6').style.display = 'none'
      document.getElementById('blank6').style.display = 'inline'
    }
    function f7 () {
      counter++
      document.getElementById('img7').style.display = 'none'
      document.getElementById('blank7').style.display = 'inline'
    }
    function f8 () {
      counter++
      document.getElementById('img8').style.display = 'none'
      document.getElementById('blank8').style.display = 'inline'
    }
    function f9 () {
      counter++
      document.getElementById('img9').style.display = 'none'
      document.getElementById('blank9').style.display = 'inline' 
    }
    function f10 () {
      counter++
      document.getElementById('img10').style.display = 'none'
      document.getElementById('blank10').style.display = 'inline'
    }
    function f11 () {
      counter++
      document.getElementById('img11').style.display = 'none'
      document.getElementById('blank11').style.display = 'inline'
    }
    function f12 () {
      counter++
      document.getElementById('img12').style.display = 'none'
      document.getElementById('blank12').style.display = 'inline'
    }
    function f13 () {
      counter++
      document.getElementById('img13').style.display = 'none'
      document.getElementById('blank13').style.display = 'inline'
    }
    function f14 () {
      counter++
      document.getElementById('img14').style.display = 'none'
      document.getElementById('blank14').style.display = 'inline'
    }
    function f15 () {
      counter++
      document.getElementById('img15').style.display = 'none'
      document.getElementById('blank15').style.display = 'inline'
    }
    function f16 () {
      counter++
      document.getElementById('img16').style.display = 'none'
      document.getElementById('blank16').style.display = 'inline'
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
    /* setTimeout(function () {
      document.getElementById('img1').style.display = 'none'
      document.getElementById('blank1').style.display = 'inline'
      document.getElementById('img2').style.display = 'none'
      document.getElementById('blank2').style.display = 'inline'
      document.getElementById('img3').style.display = 'none'
      document.getElementById('blank3').style.display = 'inline'
      document.getElementById('img4').style.display = 'none'
      document.getElementById('blank4').style.display = 'inline'
      document.getElementById('img5').style.display = 'none'
      document.getElementById('blank5').style.display = 'inline'
      document.getElementById('img6').style.display = 'none'
      document.getElementById('blank6').style.display = 'inline'
      document.getElementById('img7').style.display = 'none'
      document.getElementById('blank7').style.display = 'inline'
      document.getElementById('img8').style.display = 'none'
      document.getElementById('blank8').style.display = 'inline'
      document.getElementById('img9').style.display = 'none'
      document.getElementById('blank9').style.display = 'inline'
      document.getElementById('img10').style.display = 'none'
      document.getElementById('blank10').style.display = 'inline'
      document.getElementById('img11').style.display = 'none'
      document.getElementById('blank11').style.display = 'inline'
      document.getElementById('img12').style.display = 'none'
      document.getElementById('blank12').style.display = 'inline'
      document.getElementById('img13').style.display = 'none'
      document.getElementById('blank13').style.display = 'inline'
      document.getElementById('img14').style.display = 'none'
      document.getElementById('blank14').style.display = 'inline'
      document.getElementById('img15').style.display = 'none'
      document.getElementById('blank15').style.display = 'inline'
      document.getElementById('img16').style.display = 'none'
      document.getElementById('blank16').style.display = 'inline'
      document.getElementById('score-counter').value = scoreCounter
    }, 4000); */
  }
}


function test() {
  alert(counter)
}
