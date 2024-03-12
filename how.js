

import Home from "./home.js";
import sound from "./sound.js";

const How = (_ =>{

const $hangman = document.querySelector('.hangman'); 


const init = _ =>{
  render();
  listeners()
}


const render = _ =>{

 let markup =" ";
 markup +=  `
 <h2 class="hangman__title">Instructions</h2>
 <ul class="how hangman__instructions">
  <li> *  Alright , Here is how to play</li>
  <li> *  When you start a new game , the game will automatically choose a new word for you to guess.</li>
  <li>*  You will then click on random letters to guess. </li>
  <li>*  If your guessed  letter matches with any of the letter in the word , the letter will be displayed and you 
    will get hint to guess the full word.
  </li>
  <li >*  You will  just have 7 lives.</li>
 </ul>
 <button class="home button">Main Menu</button>
 `;

 $hangman.innerHTML = markup;
}

const listeners = _ =>{
 const homeEl = document.querySelector(".home");

 homeEl.addEventListener("click", _ => {
  Home.init();
  sound.click.play();
})
}

return {
 init: init
}

})();

export default How;
