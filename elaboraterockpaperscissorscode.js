game();  // Initiates game of rock, paper, or scissors. 

// function auto-corrects user input replacing mix of upper/lowercase letters for Rock, Paper, or Scissors. 
// also, if user decides to input anything other than Rock, Paper, or Scissors, the prompt is reset.
function word_correction() {
let user_choice = prompt("Please choose either Rock, Paper, or Scissors!"); 

if ( (user_choice.charAt(0) == "R" || user_choice.charAt(0) == "r") && (user_choice.charAt(1) == "O" || user_choice.charAt(1) == "o") && (user_choice.charAt(2) == "C" || user_choice.charAt(2) == "c") && (user_choice.charAt(3) == "K" || user_choice.charAt(3) == "k")) {
	let option = "Rock";  
    alert(`You played ${option}`); 
//  console.log(`You played ${option}`);
    return option; 
} else if ( (user_choice.charAt(0) == "P" || user_choice.charAt(0) == "p") 
	&& (user_choice.charAt(1) == "A" || user_choice.charAt(1) == "a") 
    && (user_choice.charAt(2) == "P" || user_choice.charAt(2) == "p") 
    && (user_choice.charAt(3) == "E" || user_choice.charAt(3) == "e") 
    && (user_choice.charAt(4) == "R" || user_choice.charAt(4) == "r")) {
    let option_1 = "Paper";  
    alert(`You played ${option_1}`); 
//  console.log(`You played ${option_1}`);
    return option_1;
} else if ((user_choice.charAt(0) == "S" || user_choice.charAt(0) == "s") 
	&& (user_choice.charAt(1) == "C" || user_choice.charAt(1) == "c") 
    && (user_choice.charAt(2) == "I" || user_choice.charAt(2) == "i") 
    && (user_choice.charAt(3) == "S" || user_choice.charAt(3) == "s") 
    && (user_choice.charAt(4) == "S" || user_choice.charAt(4) == "s")
    && (user_choice.charAt(5) == "O" || user_choice.charAt(5) == "o")
    && (user_choice.charAt(6) == "R" || user_choice.charAt(6) == "r")
    && (user_choice.charAt(7) == "S" || user_choice.charAt(7) == "s")) {
    let option_2 = "Scissors";  
    alert(`You played ${option_2}`); 
//  console.log(`You played ${option_2}`); 
    return option_2;
} else {
	alert("Error, please cancel and re-start!"); 
    let user_secondattempt = prompt("Please choose either Rock, Paper, or Scissors!");
    user_choice = user_secondattempt;
}
} 

// function controls the computers play and randomizes it so its unpredictable to the user 
function computerPlay() {
	const max = 3;  //sets a max value for the randomization of values. 
	const option = Math.floor(Math.random() * Math.floor(max)); // math.random() randomizes the values, while math.floor() sets the produced value to the closest whole number.

// if/else statements depending on what number is called. 
// If 0 then Rock, if 1 then Scissors, and otherwise Paper 
	if(option == 0) { 
    	alert("Computer played Rock");
//      console.log("Computer played Rock");
        return "Rock";
	} else if (option == 1){
    	alert("Computer played Scissors");
//      console.log("Computer played Scissors");
        return"Scissors";
	} else {
    	alert("Computer played Paper");
//      console.log("Computer played Paper");
 		return "Paper";
	}
}


// function take requires both the player's inout and the computer play
// based on 6 different combination of plays that could occur 
// Comparison is based on the first letter of each word as the order of predence is S > R > P 
function roundone(playerSelection, computerSelection) {
   if((playerSelection == "Rock" && computerSelection == "Scissors")) {
   		if (!("Rock">"Scissors")) { // S > R , however, the "!" or NOT returns the opposite "TRUE"  since R is normally less than S 
        	message_1 = "You Winn! Rock beats Scissors"; 
            alert(message_1);
//          console.log(message_1);
        	return message_1;
         }} else if ((playerSelection == "Scissors" && computerSelection == "Paper")) {
   		if ("Scissors">"Paper") { // similar concept mentioned above
        	 message_2 = "You Winn! Scissors beats Paper"; 
             alert(message_2);
//           console.log(message_2);
        	 return message_2;
        }} else if (playerSelection == "Paper" && computerSelection == "Rock") {
   		if (!("Paper">"Rock")) { // similar concept mentioned above
       		 message_3 = "You Winn! Paper beats Rock"; 
       		 alert(message_3); 
//           console.log(message_3); 
        	 return message_3; 
        }} else if ((playerSelection == "Scissors" && computerSelection == "Rock")) {
   		if (!("Rock">"Scissors")) { // similar concept mentioned above
        	message_4 = "You Looose! Rock beats Scissors";
            alert(message_4); 
//          console.log(message_4);   
            return message_4; 
        }} else if (playerSelection == "Paper" && computerSelection == "Scissors"){
   		if ("Scissors">"Paper") {  // similar concept mentioned above
        	message_5 = "You Looose! Scissors beats Paper";
            alert(message_5);
//     		console.log(message_5);
            return message_5; 
        }} else if (playerSelection == "Rock" && computerSelection == "Paper") {
   		if (!("Paper">"Rock")) {  // similar concept mentioned above
        	message_6 = "You Looose! Paper beats Rock";
            alert(message_6); 
// 			console.log(message_6);
            return message_6; 
        }} else { // takes in account other possible results that occur, like when the result is a DRAW!
   		alert("Looks like you came to a draw!"); 
//      console.log("Looks like you came to a draw!"); 
        return "Looks like you came to a draw!";
   }
   } 
   

// function plays the 5 rounds of rock paper scissors 
// function also keeps score of the players wins and counts losses and draws with the computer as 0 points
function game() {

let point = 0; 

const round_1_user = word_correction(); 
const round_1_computer = computerPlay();
const result_1 = roundone(round_1_user,round_1_computer);
let find_pos = result_1.search("Winn!"); // given the result, searches for the word "Winn!" and provides the position of the word to count wins. 

// Compares the actual location of the word "Winn!" to its position within the alert pop-up message
// if they are the same, it is counted as a point and if not, it is counted as no points. 
if (find_pos == 4) { 
	++point; 
    alert(`Here's what you have after Round 1: ${point}`);
//  console.log(`Here's what you have after Round 1: ${point}`);
} else {
	point += 0;
    alert(`Here's what you have after Round 1: ${point}`);
//  console.log(`Here's what you have after Round 1: ${point}`);
}   

const round_2_user = word_correction();
const round_2_computer = computerPlay(); 
const result_2 = roundone(round_2_user,round_2_computer);
let find_pos_2 = result_2.search("Winn!");

if (find_pos_2 == 4) {
	++point; 
    alert(`Here's what you have after Round 2: ${point}`);
//  console.log(`Here's what you have after Round 2: ${point}`);
} else {
	point += 0;
    alert(`Here's what you have after Round 2: ${point}`);
//  console.log(`Here's what you have after Round 2: ${point}`);
}

const round_3_user = word_correction();
const round_3_computer = computerPlay(); 
const result_3 = roundone(round_3_user,round_3_computer); 
let find_pos_3 = result_3.search("Winn!");

if (find_pos_3 == 4) {
	++point; 
    alert(`Here's what you have after Round 3: ${point}`);
//  console.log(`Here's what you have after Round 3: ${point}`);
} else {
	point += 0;
    alert(`Here's what you have after Round 3: ${point}`); 
//  console.log(`Here's what you have after Round 3: ${point}`); 
}

const round_4_user = word_correction();
const round_4_computer = computerPlay(); 
const result_4 = roundone(round_4_user,round_4_computer);
let find_pos_4 = result_4.search("Winn!");

if (find_pos_4 == 4) {
	++point; 
    alert(`Here's what you have after Round 4: ${point}`);
//  alert(`Here's what you have after Round 4: ${point}`);
} else {
	point += 0;
    alert(`Here's what you have after Round 4: ${point}`); 
//  console.log(`Here's what you have after Round 4: ${point}`); 
}

const round_5_user = word_correction();
const round_5_computer = computerPlay();
const result_5 = roundone(round_5_user,round_5_computer);
let find_pos_5 = result_5.search("Winn!");

if (find_pos_5 == 4) {
	++point; 
    alert(`Here's the total points you have after 5 rounds: ${point}`);
//  console.log(`Here's the total points you have after 5 rounds: ${point}`);
} else {
	point += 0;
    alert(`Here's the total points you have after 5 rounds: ${point}`); 
//  console.log(`Here's the total points you have after 5 rounds: ${point}`); 
}
}