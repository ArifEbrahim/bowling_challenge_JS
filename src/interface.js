
document.addEventListener("DOMContentLoaded", function() {

  let gameEnded = false;

  const updateDisplay = () => {
    document.querySelector('#rolls-display').innerText = scorecard.rolls;
  };

  const scorecard = new Scorecard();
  updateDisplay();

  document.querySelector('#roll-0').addEventListener('click', () => {
    scorecard.roll(0);
    updateDisplay();
  });

  document.querySelector('#roll-1').addEventListener('click', () => {
    scorecard.roll(1);
    updateDisplay();
  });

  document.querySelector('#roll-2').addEventListener('click', () => {
    scorecard.roll(2);
    updateDisplay();
  });

  document.querySelector('#roll-3').addEventListener('click', () => {
    scorecard.roll(3);
    updateDisplay();
  });

  document.querySelector('#roll-4').addEventListener('click', () => {
    scorecard.roll(4);
    updateDisplay();
  });

  document.querySelector('#roll-5').addEventListener('click', () => {
    scorecard.roll(5);
    updateDisplay();
  });

  document.querySelector('#roll-6').addEventListener('click', () => {
    scorecard.roll(6);
    updateDisplay();
  });

  document.querySelector('#roll-7').addEventListener('click', () => {
    scorecard.roll(7);
    updateDisplay();
  });

  document.querySelector('#roll-8').addEventListener('click', () => {
    scorecard.roll(8);
    updateDisplay();
  });

  document.querySelector('#roll-9').addEventListener('click', () => {
    scorecard.roll(9);
    updateDisplay();
  });

  document.querySelector('#roll-10').addEventListener('click', () => {
    scorecard.roll(10);
    updateDisplay();
  });

  document.querySelector('#calc-score').addEventListener('click', () => {
    if (gameEnded) {
      alert('The game has ended, please refresh the page to start again')
    } else if(_isGameOn()) {
      let remainingRolls = 20 - scorecard.rolls.length;
      alert(`The game has not ended yet, please enter ${remainingRolls} more rolls`)
    } else {
      document.querySelector('#score-text').innerText = `Final score: ${scorecard.score()}!`;
      gameEnded = true;
    }
  });

  _isGameOn = () => scorecard.rolls.length < 20;











});