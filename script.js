'use strict';


//initialize all scores to zero and do not display dice -- initial conditions
document.querySelector('#score--0').textContent = '0';
document.querySelector('#score--1').textContent = '0';
document.querySelector('#current--0').textContent = '0';
document.querySelector('#current--1').textContent = '0';
document.querySelector('.dice').style.display = 'none';

var activePlayer = 0;
var accumScore = 0;
var totalScore1 = 0;
var totalScore2 = 0;




//Roll Dice ---------------------------------------------------//
document.querySelector('.btn--roll').addEventListener('click',function() {
  var diceRoll = Math.floor(Math.random()*6)+1;
  
  //- if dice roll != 1
  if (diceRoll !== 1) {
    //--- diplay - block
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').setAttribute('src', 'dice-'+diceRoll+'.png'); 

    //--- active player current score should change, scores should be added to previous scores
    accumScore += diceRoll;
    document.querySelector('#current--'+activePlayer).textContent = accumScore;
  } else {
    //- else
    //--- active player score becomes 0
    document.querySelector('#current--'+activePlayer).textContent = 0;
    accumScore = 0;
    //--- display dice = none
    document.querySelector('.dice').style.display = 'none';
    //--- ensure toggle is on the active player
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    //--- start counting score for other player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  }

})

/*on hold */
//add accumScore to totalScore for active player
document.querySelector('.btn--hold').addEventListener('click', function() {
  if (activePlayer === 0) {
    totalScore1 += accumScore;
    document.querySelector('#score--'+activePlayer).textContent = totalScore1;
    document.querySelector('#current--'+activePlayer).textContent = 0;
    accumScore = 0;
    //--- display dice = none
    document.querySelector('.dice').style.display = 'none';
    //--- ensure toggle is on the active player
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    //--- start counting score for other player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  } else {
    totalScore2 += accumScore;
    document.querySelector('#score--'+activePlayer).textContent = totalScore2;
    document.querySelector('#current--'+activePlayer).textContent = 0;
    accumScore = 0;
    //--- display dice = none
    document.querySelector('.dice').style.display = 'none';
    //--- ensure toggle is on the active player
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    //--- start counting score for other player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  }
})
//check if current player wins- if player1 >= 100, player 2's final chance, if player 2 !>= 100, player 1 wins else draw
//next player's turn



