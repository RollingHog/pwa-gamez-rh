///////////////////// GLOBAL VARS

let isPause = true

// add "isDebug" class to element to make it debug-only
// eslint-disable-next-line no-unused-vars
let isDebug = true

// to check perf if nessesary
let isProfiling = false

///////////////////// HTML UTILS

// eslint-disable-next-line no-unused-vars
function getEl(name) {
  return document.getElementById(name)
}

// eslint-disable-next-line no-unused-vars
const sleep = (timeout) => new Promise(r => setTimeout(r, timeout))

///////////////////// MENU

// eslint-disable-next-line no-unused-vars
const Menu = {
  hide() {
    getEl('menu').hidden = true
    getEl('menuBtn').hidden = false
    isPause = false
  },
  show() {
    getEl('menu').hidden = false
    getEl('menuBtn').hidden = true
    isPause = true
  }
}

///////////////////// mainCycle

// eslint-disable-next-line no-unused-vars
async function mainCycle(callback) {
  // eslint-disable-next-line no-constant-condition
  while(true) {
    if(isPause) {
      await sleep(100)
      continue
    }
    const tb = new Date().getTime()
    callback()
    if(isDebug) {
      for (let i of document.querySelectorAll('.isDebug')) {
        i.hidden = false
      }
    }
    const timeDelta = new Date().getTime() - tb
    if(isProfiling || timeDelta > 25) {
      console.log(`elapsed ${timeDelta} ms`)
    }
    await sleep(50-timeDelta)
  }
}