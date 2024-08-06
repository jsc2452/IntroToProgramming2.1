// Function to generate a random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to handle button click event
function generateRandomNumbers() {
    var randomNumber1 = rollDice();
    var randomNumber2 = rollDice();
    var sum = (randomNumber1 + randomNumber2)
    if (sum == 7){
        document.getElementById("h2-1").innerHTML ="CRAPS - you lose!";
   }
    else if(sum == 11){
        document.getElementById("h2-1").innerHTML ="CRAPS - you lose!";
    }
    else if(sum == sum % 2 == 0){
        document.getElementById("h2-1").innerHTML ="You won!";
    }
    else {
        document.getElementById("h2-1").innerHTML ="You pushed!";
    }
    document.getElementById('randomNumberDisplay').innerHTML = `You rolled: ${randomNumber1} and ${randomNumber2}`;


    
  
    }
    
    


// Add event listener to the button
document.getElementById('roll-dice').addEventListener('click', generateRandomNumbers);
document.getElementById('h2-1').addEventListener("click", generateRandomNumbers);