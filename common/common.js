// eslint-disable-next-line no-unused-vars
function getEl(name) {
  return document.getElementById(name)
}

// eslint-disable-next-line no-unused-vars
const sleep = (timeout) => new Promise(r => setTimeout(r, timeout))

let isPause = true

//////////// MENU
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

///////////// mainCycle

// eslint-disable-next-line no-unused-vars
async function mainCycle(callback) {
  // eslint-disable-next-line no-constant-condition
  while(true) {
    if(isPause) {
      await sleep(200)
      continue
    }
    callback()
    await sleep(50)
  }
}