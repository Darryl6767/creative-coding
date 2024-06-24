
let diceSize = 100; // Size of the dice
let diceResult = 1; // Dice result
let rolling = false; // To make sure if the dice is rolling
let rolltime = 30; // Controls how long the dice rolls

function setup() {
    createCanvas(400, 400); 
    textAlign(CENTER, CENTER); 
    textSize(32); 
}

function draw() {
    background(220); 

    // Draw the dice
    fill(255); 
    rectMode(CENTER); // p5.js function: Set rectangle mode
    rect(width / 2, height / 2, diceSize, diceSize, 10); // p5.js function: Draw rectangle (in this case a dice)

    // Dice result
    fill(0); // p5.js function: Set fill color
    text(diceResult, width / 2, height / 2); // p5.js function: Display text

    // Rolling animation
    if (rolling) {
        rollDice();
    }
}

// Function to roll the dice
function rollDice() {
    let roll = floor(random(1, 7)); // p5.js function: Generate random number between 1-6
    diceResult = roll; // Update the result of the roll

    rolltime--;
    if (rolltime <= 0) {
        rolling = false; // Stop rolling animation
        rolltime = 30; // Reset roll duration for next roll
    }
}

// Function for key press (spacebar) to roll the dice
function keyPressed() {
    if (keyCode === 32 && !rolling) { // 32 is the keyCode for spacebar, p5.js function: Keycode
        rolling = true; // Start rolling animation
    }
}
