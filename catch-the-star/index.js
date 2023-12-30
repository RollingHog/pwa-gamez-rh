/* global
  VERSION
*/

////////////////////// COMMON ///////////////////////

// eslint-disable-next-line no-unused-vars
const log = console.log
// eslint-disable-next-line no-unused-vars
function getEl(name) {
  return document.getElementById(name)
}

function createElementFromHTML(htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString.trim()
  return div.firstElementChild
}

////////////////////// MAIN

function init() {
  // getEl('el__version').innerText = VERSION
}

try {
  init()
} catch (e) {
  alert(e)
  console.error(e)
}
