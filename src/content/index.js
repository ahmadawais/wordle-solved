console.log('content script')
const solution = JSON.parse(window.localStorage.gameState).solution

solution.split('').forEach((letter) => {
  document
    .querySelector('body > game-app')
    .shadowRoot.querySelector('#game > game-keyboard')
    .shadowRoot.querySelector(`button[data-key="${letter}"]`)
    .click()
})
