/*jshint esversion: 6 */

/*
 * Create a list that holds all of your cards
 */
 const cards = ['fa-diamond', 'fa-diamond',
   'fa-paper-plane-o', 'fa-paper-plane-o',
   'fa-anchor', 'fa-anchor',
   'fa-bolt', 'fa-bolt',
   'fa-cube', 'fa-cube',
   'fa-leaf', 'fa-leaf',
   'fa-bomb', 'fa-bomb',
   'fa-bicycle', 'fa-bicycle'
 ];

 // deck variables
 const deck = document.querySelector('.deck');
 // store cards in an empty array
 let openCards = [];
 // matched cards variable
 // const matchedCards = document.querySelector('.match');
 let matches = 0;
 // moves counter variables
 const movesCounter = document.querySelector('.moves');
 let moves = 0;
 // timer variables
 let min = 0;
 let sec = 0;
 let timer = 0;
 let counter = setInterval(function() {
   startTimer();
 }, 1000);
 // star rating
 const stars = document.querySelectorAll('.fa-star');
 let starCount = 3;
 // modal variables
 /* const modalBox = document.querySelector('.modal'); */
 const modal = document.getElementById('modal');
 const modalContent = document.querySelector('.modalContent');
 const playAgain = document.querySelector('.play-again-btn');
 const closeModalBtn = document.getElementsByClassName("close")[0];
 /* const playAgain = document.querySelector('.playAgain'); */
 // restart button
 const restart = document.querySelector('.restart');



 // Shuffle function from http://stackoverflow.com/a/2450976
 function shuffle(array) {
   var currentIndex = array.length,
     temporaryValue, randomIndex;

   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }

   return array;
 }

 // gives html for all cards above
 function generateCard(card) {
   return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
 }

 // initialize game
 function initGame() {
   // let deck = document.querySelector('.deck');
   let cardHTML = shuffle(cards).map(function(card) { //calling html of cards from above here & shuffling cards
     return generateCard(card);
   });
   //startTimer();
   moves = 0;
   movesCounter.innerText = moves;

   // console.log(cardHTML);
   deck.innerHTML = cardHTML.join('');

 }

 initGame();

 function checkMatch() {
   let allCards = document.querySelectorAll('.card');

   allCards.forEach(function(card) {
     card.addEventListener('click', function(e) {

       // moves++;
       // movesCounter.innerText = moves;
       // starRating();

       if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) //don't do any of below if card has open or show on it
         openCards.push(card); // push current card into array
       card.classList.add('open', 'show'); //cards flip over


       // If cards don't match - go away
       if (openCards.length == 2) {
         //  check for match
         if (openCards[0].dataset.card == openCards[1].dataset.card) {
           openCards[0].classList.add('match', 'open', 'show');
           openCards[1].classList.add('match', 'open', 'show');

           openCards = [];
           matches++;
           winGame();
         } else {

           //if no match - hide cards after period of time
           setTimeout(function() {
             openCards.forEach(function(card) { //hides cards
               card.classList.remove('open', 'show');
             });

             openCards = []; // then empty/remove cards from empty
           }, 500);
           // end of cards going away, so check for match before cards go away
         }
         moves++;
         movesCounter.innerText = moves;
         starRating();
       }
     });
   });
 }
 checkMatch();


 // ----------------- SCORE PANEL -----------------
 // -----------------------------------------------
 // -------------------- TIMER --------------------

 function startTimer() {
   sec++;
   if (sec == 60) {
     sec = 0;
     min = min + 1;
   }
   if (sec == 10) {
     timer = '';
   } else
   if (sec == 0) {
     timer = 0;
   }

   document.getElementById("timerClock").innerText = min + ':' + timer + sec;
 }

 function stopTimer() {
   clearInterval(counter);
 }

 // ----------------- STAR COUNTER ----------------

 // star count will decrease with excessive number of moves to win game
 function starRating() {
   if (moves === 14) {
     starCount = 2;
     stars[0].style.display = 'none';
   }
   if (moves > 22) {
     starCount = 1;
     stars[1].style.display = 'none';
   }
 }

 // ---------------- RESTART BUTTON ---------------

 function restartGame() {
   location.reload();
 }

 restart.addEventListener('click', restartGame);

 // ----------------- GAME WINNER & MODAL POPUP -----------------

 function winGame() {
   if (matches === 8) {
     // console.log("WIN GAME!!!!");
     stopTimer();
     openModal();
   }
 }
 // winGame();


 // play again button
 function playAgainButton() {
   // restartGame();

   playAgain.addEventListener('click', function() {
     modal.style.display = 'none';
     restartGame();
   });
 }
 // Function to open
 function openModal() {
   modal.style.display = 'block';
    document.getElementById("moves").innerHTML = moves;
    document.getElementById("starCount").innerHTML = starCount;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

   playAgainButton();
 }


 // Modal:  w3 modal
 // Get <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
   restartGame();
 };

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };
