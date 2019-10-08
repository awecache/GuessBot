const doorImage1=document.getElementById('door1');
const doorImage2=document.getElementById('door2');
const doorImage3=document.getElementById('door3');

const botDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton= document.getElementById('start');

let currentlyPlaying=true;
let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;


doorImage1.onclick=()=>{
  if(!isClicked(doorImage1)&&currentlyPlaying){
    doorImage1.src=openDoor1;
    playDoor(doorImage1);
  }
  
};

doorImage2.onclick=()=>{
  if(!isClicked(doorImage2)&&currentlyPlaying){
  	doorImage2.src=openDoor2;
  	playDoor(doorImage2);
  }
};
doorImage3.onclick=()=>{
  if(!isClicked(doorImage3)&&currentlyPlaying){
  	doorImage3.src=openDoor3;
  	playDoor(doorImage3);
  }
};


startButton.onclick=function(){
  if (!currentlyPlaying){
    startRound();
  }
  
};

function startRound(){
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  startButton.innerHTML='Good Luck!';
  currentlyPlaying=true; 
  randomChoreDoorGenerator();
  
}


function gameOver(status){
  if(status==='win'){
    startButton.innerHTML='You win! Play again?';
  }
  if(status==='lose'){
    startButton.innerHTML='Game over! Play again?';
  }
  currentlyPlaying=false;
};

function isBot(door){
  if(door.src===botDoorPath){
    return true;
  }
  else{
    return false;
  }
};


function isClicked(door){
  if(door.src===closedDoorPath){ 
    return false;
     }
  else{
    return true;    
  };
  
};//ensure door is only clicked once

function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)===true && numClosedDoors>=1){
    gameOver('lose');
  };
  
};


randomChoreDoorGenerator=()=>{
  let choreDoor=Math.floor(Math.random()*numClosedDoors);
  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
     }
  else if(choreDoor===1){    
    openDoor2= botDoorPath;
    openDoor1=beachDoorPath;
    openDoor3=spaceDoorPath;         
          }
  else{
    openDoor3=botDoorPath;
    openDoor1=spaceDoorPath;
    openDoor2=beachDoorPath;
  }
};
  
  
  startRound();



