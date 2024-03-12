import Home from "./home.js";
import Game from "./game.js";
import sound from "./sound.js";

const EndModule = (_ =>{


 const $hangman = document.querySelector('.hangman'); 

 const state = {
  choseWord : null,
  winOrLose : null
 }


 const setState = obj =>{
   state.choseWord = obj.choseWord;
   state.winOrLose = obj.winOrLose;
   render();
 }

const render = _ =>{

 let markup =" ";
 markup +=  `
 <h2 class="hangman__title">YOU ${state.winOrLose}</h2>
 <p class="hangman__instructions"> The word is ${state.choseWord}</p>
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


const init = _ =>{
 listeners()
}

return {
 init: init,
 setState : setState
}

})();

export default EndModule;
