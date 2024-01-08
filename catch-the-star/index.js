/* global
  VERSION
  getEl isPause
*/

////////////////////// COMMON ///////////////////////

// eslint-disable-next-line no-unused-vars
const log = console.log

// thx https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// eslint-disable-next-line no-unused-vars
const sleep = (timeout) => new Promise(r => setTimeout(r, timeout))


// eslint-disable-next-line no-unused-vars
function createElementFromHTML(htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString.trim()
  return div.firstElementChild
}

////////////////////// MAIN

const data = {
  _points: 0,
  point(value = 1) {
    this._points += value
    getEl('stat_points').innerText = this._points
  },
  _lost: 0,
  lost(value = 1) {
    this._lost += value
    getEl('stat_lost').innerText = this._lost
  }
}

// should be same as star width
const STAR_PADDING = 60

function addStar() {
  const star = document.createElement('img')
  star.classList.add('star')
  star.draggable = false
  star.setAttribute('src', 'star.png')
  star.style.top = '0px'
  star.style.left = `${getRandomInt(STAR_PADDING, window.innerWidth-STAR_PADDING)}px`
  star.onclick = () => {
    data.point()
    star.remove()
  }

  getEl('starsWrap').appendChild(star)
}

let difficultyMult = 0.08

let mainSpeed = 3

async function mainCycle() {
  while(true) {
    if(isPause) {
      await sleep(200)
      continue
    }
    /**
     * @type {HTMLElement[]}
    */
   let stars = document.querySelectorAll('img.star')
   getEl('stat_stars').innerText = stars.length
    //  log('stars:', stars.length)

    if(Math.random() < difficultyMult) {
      addStar()
    }

    if(stars.length < 5) {
        if(Math.random() < difficultyMult) {
        addStar()
      }
    }


    for(let star of stars) {
      const tCoord = parseInt(star.style.top)
      if (tCoord > window.innerHeight) {
        data.lost()
        star.remove()
        continue
      }
      let speed = mainSpeed
      star.style.top = `${tCoord + speed}px`
    }

    await sleep(50)
  }
}

function init() {
  // getEl('el__version').innerText = VERSION
  mainCycle()
}

try {
  init()
} catch (e) {
  alert(e)
  console.error(e)
}
