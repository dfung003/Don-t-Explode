# Don\'t-Explode

## About
This is a bomb tossing game where you the player will take turns throwing a bomb back and forth with the computer. The bomb count will start 
at 15 on the first round. The player and computer will choose to decrease the count by 1 or 2 when they have the bomb. The one who has the bomb
and decreases the count to 0 loses, while the other player wins.


## Motivation
This game was created as an inspiration to a mini-game in Mario Party 5 called "Head Waiter." To show my appreciation for a game that had 
provided so much fun to me as a child, I decided to recreate a game similar to it.


## Technologies used
* HTML, CSS, JavaScript
* Visual Studio Code with Live Server Extension
* [Wireframe.cc](https://wireframe.cc/)


## How to play the game
* Press Start Game to begin playing
![Alt text](./assets/Screenshot_dont_explode.png?raw=true "Title")
* You have the option of selecting two buttons: Decrease count by 1, Decrease count by 2
![Alt text](./assets/Screenshot_buttons.png?raw=true "Title")
* There is a bomb count highlighted in red that displays the total count before it explodes
* You, the player starts first in every round. Pressing Decrease count by 1 will decrease the bomb count by 1 while pressing Decrease count by 2 will decrease the bomb count by 2
* After you finish your turn, the bomb will be handed to the CPU and it will make its own choice of whether to decrease the bomb count by 1 or 2
* You and the CPU will take turns tossing the bomb back and forth, and victory goes to the one that did not have the bomb last (the one with the bomb who decreases the bomb count to 0, loses)
* Press Play Again to play a new round
* Score is updated every time someone wins (notice the bomb count may or may not be 15 after the first round ends)
* There is a scroll bar on the right for reference in case you wanted to monitor each move
* Press the speaker icon on the bottom left to play intense music while playing the game

## Credits
* Nintendo, for their Mario Party 5 game I am using as images for each player/CPU turn and transition
* Square Enix/Nobuo Uematsu, for their song "Bombing Mission" from Final Fantasy VII
* Special thanks to Anthony Rondina, Ed Tang, James Steven, Joshua Miller, Roy Daniel, and Wesley Brown for helping me extensively on putting this project together

## Resources
* MDN Web Docs: [Set timeout method](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout), [Textarea element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
* [Textarea element scroll to bottom by default](https://stackoverflow.com/questions/7373081/how-to-have-a-textarea-to-keep-scrolled-to-the-bottom-when-updated)
* [Reusable JS modal template](https://codepen.io/eddyerburgh/pen/YqvVrr)
* [Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-properties)
* [Guide to writing a README](https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* [README Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [My wireframe for the game](https://wireframe.cc/96MKRd)