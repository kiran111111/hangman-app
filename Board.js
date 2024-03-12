import Game from "./game.js";

const Board = (_ =>{
  
 let livesLeft = null;
 let canvas;
 let context;

 const init = _ =>{
  canvas = document.querySelector(".hangman__board");
  context = canvas.getContext("2d");
  context.lineWidth = 2;
  context.strokeStyle = "white";

  draw(0,96,100,96);
  draw(4,0,4,100);
  draw(0,5,30,5);
}

 const draw = (startX,startY,endX,endY) =>{
  context.moveTo(startX,startY);
  context.lineTo(endX,endY);
  context.stroke();
}

 const line0 = _ =>draw(0,0,0,0);

const line1 = _ =>{
 context.beginPath();
 context.arc(30, 15, 10, 0, 2 * Math.PI);
 context.stroke();
} 

 const line2 = _ =>draw(30,25,30,55);

 const line3 = _ => draw(30,30,5,30);
 
 const line4 = _ => draw(30,30,55,30);

 const line5 = _ => draw(30,55,5,70);

 const line6 = _ => draw(30,55,55,70);



 const setLives = newLives =>{
  livesLeft = newLives;
  render();
 }

 const render = _ =>{
  parts[livesLeft]();
 }

 const parts = [line0,line1, line2,line3,line4,line5,line6];

 return {
  init,
  setLives
 }

})();

export default Board;