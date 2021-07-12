
document.addEventListener("DOMContentLoaded", function() {

  const updateDisplay = () => {
    document.querySelector('#rolls-display').innerText = scorecard.display();
  };

  const scorecard = new Scorecard();

  document.querySelector('#roll-0').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(0);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-1').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(1);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-2').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(2);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-3').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(3);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-4').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(4);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-5').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(5);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-6').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(6);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-7').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(7);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-8').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(8);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-9').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(9);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#roll-10').addEventListener('click', () => {
    if (scorecard.isGameOn()) {
      scorecard.roll(10);
      updateDisplay();
    } else {
      alert('The game has ended, please refresh the page to start again');
    }
  });

  document.querySelector('#calc-score').addEventListener('click', () => {
    if (scorecard.scoreCalculated) {
      alert('The game has ended, please refresh the page to start again');
    } else if(scorecard.isGameOn()) {
      let remainingRolls = 20 - scorecard.rolls.length;
      alert(`The game has not ended yet, please enter ${remainingRolls} more rolls`);
    } else {
      document.querySelector('#score-text').innerText = `Final score: ${scorecard.score()}!`;
    }
  });











});