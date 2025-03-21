/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasInsults = true;
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice1 = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice1 === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const choice2 =readline.question("As you navigate through the darkness you see an opening in the side of the mountain with a faint light flickering inside. Do you enter?");
  if (choice2 === "yes") {
    console.log("You come across a group of two bandits resting and notice a bag of gold laying out close to you") ;
    const choice3 = readline.question("Do you grab the gold before they notice you or leave?");
    if (choice3 === "grab gold") {
      console.log("You quietly grab the gold and sneak out before the bandits can notice you but hear a commotion as you leave")
      hasGold = true;
    }
    else if (choice3 === "leave") {
      console.log("You quickly turn around to get out of there but kick a rock as you turn, alerting the bandits. The bandits quickly strike you down. Game Over.");
    }
  }
  if (choice2 === "no") {
    console.log("Your torch is starting to die out and you hear the howl of wolves in the distance. Tonight will be sleepless.")
}
} else if (choice1 === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
  const choice2 = readline.question("You cant see where you are going and stumble down a hill. When you look up you see a small cabin ahead. As you approach you see a woodcutters axe in a stump. Do you grab it?")
  if (choice2 === "yes") {
    console.log("You grab the axe and look around noticing for the first time the human limbs hanging off the front of the cabin. This cabin is home to a cannibal!");
    const hasAxe = true;
        const choice3 = readline.question(" Just as you realize where you are, a crazed shirtless man brandishing a knife charges you while screaming. Do you fight or flee?")
    if (choice3 === "fight" && hasAxe ) {
        console.log("you manage to fight off the cannibal and keep moving on")
    }
    else if (choice3 === "flee" || !hasAxe ) {
        console.log("The cannibal was too fast and too strong. They think you will make a nice stew.")
    }
  }
} else if (choice1 === "village" || hasMap) {
  console.log("You find your way to the village.");
  const choice2 = readline.question("As you are walking through the village a beligerant drunk calls your mother a hamster. Do you fight the drunk or use your words or ignore them?")
    if (choice2 === "fight" && hasAxe ) {
        console.log(" The drunk sees your weapon and insist they were only joking and runs away") ;
    }
    else if (choice2 === "words" && hasInsults ) {
        console.log("You tell the drunk their father smells of elderberries and they stumble home crying") ;
    }
    else {
        console.log("The drunkard sways a bit more while looking at you, waiting for a response. After a couple seconds he throws up on himself and promptly passes out in the dirt")
    }

} else {
  console.log("You get lost and wander aimlessly forever.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
