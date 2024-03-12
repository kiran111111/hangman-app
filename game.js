
import Home from "./home.js";
import sound from "./sound.js";
import EndModule from "./endModule.js";
import Board from "./Board.js";

const Game = (_ =>{

 // state 
 const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 const words = ['apple','ball','cat','mango'];
 let choosenWord;
 let guessedWord;
 let lives =7;
 let guesses = [];


 const $hangman = document.querySelector('.hangman');
 const guessedWordEl = document.querySelector(".hangman__word");
 const livesEl = document.querySelector(".hangman__lives");

 



 // getting a random number for array
 const random = (num) =>{
  return Math.floor((Math.random() * num) + 1)
 }

 // getting your guessing word acc to the lenght of choosen random word
 const underScore = (num) =>{
  let arr = [];
  for(let i=0;i<num;i++){
   arr.push(" _ ");
  }
  return arr;
 }

 // creating  keyboard of letters
 
 
const initPage =_ =>{
 
 let markup ="";
 markup += `
        <p class="hangman__stats">Lives: 
        <span class="hangman__lives">${lives}</span>
        </p>
        <h1 class="hangman__title">HANGMAN</h1>
        <canvas class="hangman__board" height="100" width="300"></canvas>
        <div class="hangman__word">${guessedWord.join("")}</div>
        <p class="hangman__instructions">Pick a letter below to guess the whole word</p>
        <ul class="letters">
          ${createLetters()}
        </ul>
        <button class="home button">Main Menu</button>
         `
     $hangman.innerHTML = markup;  

    
}



const render = _ => {
 document.querySelector(".hangman__lives").innerHTML = lives;
 document.querySelector(".hangman__word").innerHTML= guessedWord.join("");
 document.querySelector(".letters").innerHTML = createLetters();

}


const createLetters = _ =>{
 let markup = "";
 letters.forEach(elem => {
  const isActive = isAlreadyTaken(elem) ? "hangman__letter--active" : " ";
  markup += `
  <li class="hangman__letter  ${isActive}">${elem}</li>
`
 });
 return markup;
}

const hasWon = _ =>{
  return guessedWord.join("") == choosenWord;
}

const hasLost = _ =>{
 return lives <= 0;
}

const restart = _ => {
 return lives = 7,
      guesses =[],
    createLetters();
}

const gameOver = _ =>{
   if(hasWon()){
     EndModule.setState({
      choseWord : choosenWord,
      winOrLose : "WIN"
     }) 
    restart();
    sound.win.play();
   }

   if(hasLost()){
    EndModule.init();
    EndModule.setState({
     choseWord : choosenWord,
     winOrLose : "LOSE"
    }) 
    restart();
    sound.lose.play();
   }
}

const isAlreadyTaken = letter =>{
  return guesses.includes(letter);
}

const updateGuessingWord = letter =>{
  choosenWord.split("").forEach((elem,index) =>{
    if(elem === letter){
      guessedWord[index] = elem;
    }
  })
}






const check = guess =>{
  if(isAlreadyTaken(guess)) return;

  guesses.push(guess);
  if(choosenWord.includes(guess)){
     updateGuessingWord(guess);
     // guessedWordEl.innerHTML = guessedWord;
  }else{
   lives--;
   Board.setLives(lives);
  }
  render();
  gameOver();
}

const listeners = _ =>{
 
 $hangman.addEventListener("click", _ => {

  if(event.target.matches(".home")){
   Home.init();
   sound.click.play();
  }

 if(event.target.matches(".hangman__letter")){
  sound.click.play();
  check(event.target.innerHTML);
   }
 })
}




const init = _ =>{
  lives = 7;
  restart();
 createLetters();
  
 // 1 . Choose a random word
  choosenWord = words[random(3)];

 // 2 . Build out our own guessing word
  guessedWord = underScore(choosenWord.length);
  
 // 3 . Create the logic screen
  initPage();
 //4. The button to go to the main home screen

 listeners();
//  5. Initialise the board module
 Board.init();

}

 
 
 return {
  init: init
 }

})();

export default Game;