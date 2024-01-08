// eslint-disable-next-line no-unused-vars
function getEl(name) {
  return document.getElementById(name)
}

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