/* GAME NAME: Don't Explode! (Based on a Mario Party mini-game) */

/* Rules of the game:

1. Players take turns in tossing a bomb back and forth that starts on a count of 15
2. You will always go first, while the CPU goes second
3. Both players have the option of decreasing the counter by 1 or 2
4. Whoever counts down to 0 or less first with the bomb, loses.
5. On rounds after the first, bomb count will vary from 15-20.

*/

/* SEQUENCE OF HOW THE GAME WEBSITE IN THE BROWSER WILL WORK 
// Once you are on the game page, it will have a title of Don't Explode
// Once you enter the webpage, you will see a bomb count of 15, player/cpu scores 
// There will be two clickable buttons for the user.
// The first button will allow the user to decrease the bomb count by 1 and the other
// button will allow the user to decrease the bomb count by 2
// Bomb count displayed will be updated based on the decision of player and computer
// There will be a log on the website that indicates that
// it is your turn. Once the bomb count reaches 0, display whether you or the computer won
// and display a Play Again button to allow the player to play again
// Play Again refreshes the count, win counter is updated
// The bomb counter will randomize from an integer of 15 to 20 instead of always 15.
*/

// Fonts used
// https://fonts.google.com/specimen/Bebas+Neue
// https://fonts.google.com/specimen/Orbitron

// WIREFRAME FOR THE DOM
// https://wireframe.cc/96MKRd


// GLOBAL VARIABLE FOR BOMB COUNT TO SHOW IN THE DOM

const bombCountUI = document.getElementById("bomb-count");

// GLOBAL VARIABLE FOR MODAL STATING THE OUTCOME OF THE ROUND
let modalStatus = document.getElementById("modal");

// GLOBAL VARIABLE TO CLOSE MODAL AND TO PLAY AGAIN
let closeButton = document.getElementById("close");

closeButton.addEventListener('click', (evt) => {
  modalStatus.classList.add("hidden");
  newRound();
  toggleButtons();
})

// GLOBAL VARIABLE REFERENCING STATUS MESSAGE ON VICTORY
const pTags = document.getElementById("status-message");


// GLOBAL VARIABLE OF ROUND COUNT
let roundCount = 1;


// DOM Elements here
// Show a bomb illustration with the dynamic count number on it
// Show an indicator(?) that signals that it is your turn

// Paragraph showing in-game text narrating each time the count has
// been decreased by what value

// Something here to make it so the bomb count would not show up
// if count is at 8 or less

// Need to figure out formatting of the Rules guidelines, the
// player/CPU score count, bomb count, and the text log

/* 
class Player

method that allows the player to decrease the counter of the bomb by
1 or 2

}
*/
// Player (you) properties

class Player {
    constructor() {
        this.hasBomb = true; // determines if you have possession of the bomb
        this.victory = 0; // keeps count of how many times you won
    }
    // Player decrease bomb counter method

    // decreaseCount() { move to a function

}

// Instantiating Player

const player = new Player();

/* 
class Computer

method that allows the computer to decrease the counter of the bomb
randomly by either 1 or 2
  
  }
}

*/
// Computer properties

class Computer {
    constructor() {
        this.hasBomb = false; // determines whether cpu has possession of the bomb
        this.victory = 0; // cpu score counter
    }
    // Computer randomly decreases bomb counter method

    // decreaseCount() { //Math method to randomize an integer from 1 to 2 as a whole number move to function
    // Math.floor(Math.random()*2+1)

    }

// Instantiating the Computer

const cpu = new Computer();


// class Bomb

class Bomb {
  constructor () {
    this.setCount(15) // property to set the bomb count by 15 on default
  }
    setCount (newCount) { // create function to set the count
      this.count = newCount; // first round by default will be count of 15, then will randomize
      const bombCountUI = document.getElementById("bomb-count"); // stored in variable of bomb count in UI
      bombCountUI.innerText = newCount; // bomb count will show in the DOM by newCount parameter
    // this.explode = false;
  }
}


// Instantiation of Bomb

const bomb = new Bomb;

// FUNCTION THAT DETERMINES BOMB HEALTH AT START OF THE ROUND
const bombCount = () => {
  if (roundCount > 1) {
    // bomb.count = Math.floor(Math.random() * (21 - 15)) + 15;
    bomb.setCount(Math.floor(Math.random() * (21 - 15)) + 15);
    // this makes 15-20
  }
}

bombCount()
console.log(bomb.count)
// display bomb.count in big font on the indicator of the DOM

// FUNCTION THAT DECREASES BOMB BY 1 OR 2
const playerToss = (count) => {
  
  player.hasBomb = true; // player would have bomb to toss it
  cpu.hasBomb = false; // 
  const playerCount = (count > bomb.count) ? 0 : bomb.count - count
  bomb.setCount(playerCount); // counter on the bomb will show 0 even if it is at -1
  // console.log(bomb.count, "Player move")
  logEvent(`You have decreased the bomb count by ${count}. Bomb count is now at ${bomb.count}`)
  // Put in the DOM "Player has decreased the count by 1(2)"
  if (bomb.count <= 0) { // if bomb counter is already at 0 or less, end the game
    endGame() 
    logEvent(`The bomb has exploded!`);
  } else {
    changeImage("./assets/throwbomb.png")
    toggleButtons();
    setTimeout(() => {
      changeImage("./assets/cpuhasbomb.png")
      logEvent(`CPU is deciding...`)
      setTimeout(cpuToss, Math.floor(Math.random()*2+1) * 1000);  
    }, 500);
   
  }
  
}

// make a function for computer to toss the bomb and randomly generate 1 or 2 
// and swap images of players holding the bomb

const cpuToss = () => {
  cpu.hasBomb = true;
  player.hasBomb = false;
  const cpuDecide = Math.floor(Math.random()*2+1); // variable for cpu to generate 1 or 2
  const cpuCount = (cpuDecide > bomb.count) ? 0 : bomb.count - cpuDecide // count will show as 0 regardless
  bomb.setCount(cpuCount); // cpu decrease by 1 or 2
  // Print in the DOM "CPU is deciding... (2 seconds)"
  // Print in the DOM "CPU has decreased the count by 1(2)"
 
  if (bomb.count <= 0) { // if bomb counter is already at 0 or less, end the game
    endGame();
    logEvent(`The bomb has exploded!`)
    toggleButtons();
    return 
  } 
  console.log(bomb.count, "CPU move")
  logEvent(`CPU has decreased the bomb count by ${cpuDecide}. Bomb count is now at ${bomb.count}`)
  logEvent(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
  toggleButtons(); // player's turn
  changeImage("./assets/throwbomb.png")
  setTimeout(() => {
    changeImage("./assets/playerhasbomb.png")}, 500)

  }


// // FUNCTION THAT DECREASES BOMB BY 2
// const playerTossTwo = () => {
//   player.hasBomb = false;
//   cpu.hasBomb = true;
//   bomb.count -= 2;
//     if (bomb.count <= 0) {
//       endGame()
//     }
// }

// NEW ROUND FUNCTION
const newRound = () => { // make the image of player hold the bomb, computer image to
  // not hold the bomb, resets the game
  roundCount++
  bombCount();
  // bombRange = false;
  bombCountUI.innerText = bomb.count;
  console.log("The bomb health is " + bomb.count)
  // Print in the DOM `Round ${roundCount} start!`
  cpu.hasBomb = false;
  player.hasBomb = true;
  
  changeImage("./assets/playerhasbomb.png")
  const eventLog = document.getElementById("running-log");
  eventLog.value = "";
  // display bomb.count in the DOM
  
}

// FUNCTION THAT CHECKS TO SEE IF BOMB EXPLODES
const endGame = () => { // ends the game if either bomb explodes on player or on cpu
  changeImage("./assets/bombexplosion.png")
    if(player.hasBomb) {
      cpu.victory += 1 // adds 1 to win counter
      const cpuScoreUI = document.getElementById("cpu-score");
      cpuScoreUI.innerText = cpu.victory;
      
      pTags.textContent = `The bomb exploded on your hands. CPU wins.`
      modalStatus.classList.remove("hidden");
      // Print in the DOM "Bomb has exploded in your hands. You lose."
      // add 1 to CPU score on the DOM
    } else if (cpu.hasBomb) {
      player.victory += 1
      const playerScoreUI = document.getElementById("player-score");
      playerScoreUI.innerText = player.victory;
      pTags.textContent = `You win!`
      modalStatus.classList.remove("hidden");
      // Print in the DOM "You win" and add 1 to player score on the DOM
    }
  toggleButtons();
  
}

const picture = document.getElementById("picture")
// FUNCTION THAT CHANGES THE IMAGE ON THE DOM
const changeImage = (imagePath) => {
    picture.src = imagePath
}




/* gameStart function
  
  resets the bomb count, sets player to having the bomb, adds 1 or whoever won

*/

const gameStart = () => {
  cpu.hasBomb = false;
  player.hasBomb = true;
  bombCount();
  player.victory = 0;
  cpu.victory = 0;
  // add code for image for player has bomb and computer does not
}

gameStart()

/*

  //////////

  event listener buttons

  button to decrease count of bomb by 1

  button to decrease count of bomb by 2

  restart button that refreshes the game

*/
// FUNCTION ADDS TEXT IN LOG

const logEvent = (evt) => {
  const textLog = document.getElementById("running-log");
  textLog.value += '\n' + evt;
  textLog.scrollTop = textLog.scrollHeight;
}

// FUNCTION TO TOGGLE PLAYER BUTTONS

const toggleButtons = () => {
  decreaseOneBtn.disabled = !decreaseOneBtn.disabled;
  decreaseTwoBtn.disabled = !decreaseTwoBtn.disabled;
}

const decreaseOneBtn = document.getElementById("decrease-one")

decreaseOneBtn.addEventListener('click', (evt) => {
  playerToss(evt.target.value) // passing the value of the tag 
})

const decreaseTwoBtn = document.getElementById("decrease-two")

decreaseTwoBtn.addEventListener('click', (evt) => {
  playerToss(evt.target.value)
})

// HOVER EFFECT TO CHANGE BUTTONS TO RED FOR BOTH BUTTONS

const playerBtns = document.querySelectorAll(".player-choice")

playerBtns.forEach((item) => {
  item.addEventListener ('mouseenter', (evt) => {
    item.classList.add("red")
    item.classList.remove("brown")
  })
  item.addEventListener ('mouseout', (evt) => {
    item.classList.remove("red") 
    item.classList.add("brown")
  })
})

// EVENT LISTENER FOR START GAME

const startBtn = document.getElementById("start")

startBtn.addEventListener('click', (evt) => {
  decreaseOneBtn.style.display = "block"
  decreaseTwoBtn.style.display = "block"
  picture.style.display = "block"
  evt.target.style.display = "none"
})


// audio track "Bombing Mission FFVII" running in the background

let audioElement = document.getElementById("bgm");
const togglePlay = () => {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
};

const playMusic = document.getElementById("music");

playMusic.addEventListener('click', (evt) => {
    togglePlay();
})