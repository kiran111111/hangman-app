
import sound from "./sound.js";
import Game from "./game.js";
import How  from "./how.js";

// cache dom


const Home = (_ =>{
  
 const $hangman = document.querySelector('.hangman');
 

 const init = _ =>{
  render();
  listeners();
 }

 const render = _ =>{
   let markup ="";
   markup += `
      <h3 class="hangman__title">HANGMAN</h3>
      <button class="button start">New Game</button>
      <button class="button instructions">Instructions</button>
     `

     $hangman.innerHTML = markup;
 }



 const listeners = _ =>{

  const startEl = document.querySelector(".start");
   const instrucEl = document.querySelector(".instructions");

   startEl.addEventListener("click", _ =>{
     Game.init(); 
     sound.click.play();
   })
   
   instrucEl.addEventListener("click", _ => {
    sound.click.play();
     How.init();
   })
 }

 return {
  init:init
 }

})();


Home.init();



export default Home;


