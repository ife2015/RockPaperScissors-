
game();

function game() {
    let playScore = 0; 
    let compScore = 0;

    // Starts Game
    function startGame () {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const compInfo = document.querySelector('.container');

        playButton.addEventListener('click', function(){
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            compInfo.classList.add('fadeIn');
        });
    }

    //Plays match 
    function playMatch () {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('player-hand');
        const computerHand = document.querySelector('computer-hand');
        

        //Player Selection 
        options.forEach(option => {
            option.addEventListener('click',function(){
                console.log(this.textContent);

                var computer_choice = computerPlay(); 

                  // Computer Random Options 
                function computerPlay() {
                    const max = 3;  
                    const option = Math.floor(Math.random() * Math.floor(max)); 
        
                    if(option == 0) { 
                        return "Rock";
                    } else if (option == 1){
                        return "Scissors";
                    } else {
                         return "Paper";
                    }
                }
                // Compares Player and Computer Selection 
                compareHands(this.textContent, computer_choice);

            })

        })
        
    }

    //Keeps score 
    function updateScore() {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = playScore; 
        computerScore.textContent = compScore; 

        // play only up to 5 points 
        if(playScore == 5 || compScore == 5) {
            alert("Thats 5 rounds!");
                if(playScore > compScore){
                    alert("You beat the computer!");
                } else {
                    alert("Sorry, the computer won!"); 
                }
        }

    }

    //compares the player and computer selection 
    function compareHands(playerSelection, computerSelection) {
        const winner = document.querySelector('.winner');
        const message = document.querySelector('.inform')
        if((playerSelection === "Rock" && computerSelection === "Scissors")) {
                if (!("Rock">"Scissors")) { 
                    winner.textContent = "You Winn!"; //Rock beats Scissors
                    message.textContent = "Computer: Scissors";
                    playScore++;
                    updateScore();
                 return;
              }} else if ((playerSelection === "Scissors" && computerSelection === "Paper")) {
                if ("Scissors">"Paper") { 
                    winner.textContent = "You Winn!" //! Scissors beats Paper"; 
                    message.textContent = "Computer: Paper";
                    playScore++;
                    updateScore()
                  return; 
             }} else if (playerSelection === "Paper" && computerSelection === "Rock") {
                if (!("Paper">"Rock")) { 
                    winner.textContent = "You Winn!" // Paper beats Rock"; 
                    message.textContent = "Computer: Rock";
                    playScore++;
                    updateScore();
                  return;
             }} else if ((playerSelection === "Scissors" && computerSelection === "Rock")) {
                if (!("Rock">"Scissors")) { 
                    winner.textContent = "Computer Wins!" // and You Looose! Rock beats Scissors";
                    message.textContent = "Computer: Rock";
                    compScore++;
                    updateScore();
                    return; 
             }} else if (playerSelection === "Paper" && computerSelection === "Scissors"){
                if ("Scissors">"Paper") { 
                    winner.textContent = "Computer Wins" //and You Looose! Scissors beats Paper";
                    message.textContent = "Computer: Scissors";
                    compScore++;
                    updateScore();
                 return;  
             }} else if (playerSelection === "Rock" && computerSelection === "Paper") {
                if (!("Paper">"Rock")) {  
                    winner.textContent  = "Computer Wins" // Paper beats Rock";
                    message.textContent = "Computer: Paper";
                    compScore++; 
                    updateScore();
                 return; 
             }} else { 
                 winner.textContent = 'It is a tie!'; 
                 message.textContent = `Computer: ${playerSelection}`;
                 return; 
        }
        } 
startGame(); 
playMatch(); 
}

   




// function game() {

// let point = 0; 

// const round_1_user = word_correction(); 
// const round_1_computer = computerPlay();
// const result_1 = roundone(round_1_user,round_1_computer);
// let find_pos = result_1.search("Winn!"); 


// if (find_pos == 4) { 
// 	++point; 
//     console.log(`Here's what you have after Round 1: ${point}`);
// } else {
// 	point += 0;
//    console.log(`Here's what you have after Round 1: ${point}`);
// }   

// const round_2_user = word_correction();
// const round_2_computer = computerPlay(); 
// const result_2 = roundone(round_2_user,round_2_computer);
// let find_pos_2 = result_2.search("Winn!");

// if (find_pos_2 == 4) {
// 	++point; 
//     console.log(`Here's what you have after Round 2: ${point}`);
// } else {
// 	point += 0;
//     console.log(`Here's what you have after Round 2: ${point}`);
// }

// const round_3_user = word_correction();
// const round_3_computer = computerPlay(); 
// const result_3 = roundone(round_3_user,round_3_computer); 
// let find_pos_3 = result_3.search("Winn!");

// if (find_pos_3 == 4) {
// 	++point; 
//     console.log(`Here's what you have after Round 3: ${point}`);
// } else {
// 	point += 0;
//    console.log(`Here's what you have after Round 3: ${point}`); 
// }

// const round_4_user = word_correction();
// const round_4_computer = computerPlay(); 
// const result_4 = roundone(round_4_user,round_4_computer);
// let find_pos_4 = result_4.search("Winn!");

// if (find_pos_4 == 4) {
// 	++point; 
//     console.log(`Here's what you have after Round 4: ${point}`);
// } else {
// 	point += 0;
//     console.log(`Here's what you have after Round 4: ${point}`); 
// }

// const round_5_user = word_correction();
// const round_5_computer = computerPlay();
// const result_5 = roundone(round_5_user,round_5_computer);
// let find_pos_5 = result_5.search("Winn!");

// if (find_pos_5 == 4) {
// 	++point; 
//     console.log(`Here's the total points you have after 5 rounds: ${point}`);
// } else {
// 	point += 0;
//     console.log(`Here's the total points you have after 5 rounds: ${point}`); 
// }
// }