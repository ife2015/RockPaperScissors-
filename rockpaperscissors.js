var point = 0; 

let round_1_user = word_correction(); 
let round_1_computer = computerPlay();
let result_1 = roundone(round_1_user, round_1_computer);
score(result_1); 

let round_2_user = word_correction();
let round_2_computer = computerPlay(); 
let result_2 = roundone(round_2_user, round_2_computer); 
score_2(result_2);

let round_3_user = word_correction();
let round_3_computer = computerPlay(); 
let result_3 = roundone(round_3_user, round_3_computer); 
score_3(result_3);

let round_4_user = word_correction();
let round_4_computer = computerPlay(); 
let result_4 = roundone(round_4_user , round_4_computer);
score_4(result_4);

let round_5_user = word_correction();
let round_5_computer = computerPlay(); 
let result_5 = roundone(round_5_user , round_5_computer);
score_5(result_5);


function word_correction() {
let user_choice = prompt("Please choose either Rock, Paper, or Scissors!"); 

if ( (user_choice.charAt(0) == "R" || user_choice.charAt(0) == "r") && (user_choice.charAt(1) == "O" || user_choice.charAt(1) == "o") && (user_choice.charAt(2) == "C" || user_choice.charAt(2) == "c") && (user_choice.charAt(3) == "K" || user_choice.charAt(3) == "k")) {
	let option = "Rock";  
    console.log(`You played ${option}`); 
    return option; 
} else if ( (user_choice.charAt(0) == "P" || user_choice.charAt(0) == "p") 
	&& (user_choice.charAt(1) == "A" || user_choice.charAt(1) == "a") 
    && (user_choice.charAt(2) == "P" || user_choice.charAt(2) == "p") 
    && (user_choice.charAt(3) == "E" || user_choice.charAt(3) == "e") 
    && (user_choice.charAt(4) == "R" || user_choice.charAt(4) == "r")) {
    let option_1 = "Paper";  
    console.log(`You played ${option_1}`); 
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
    console.log(`You played ${option_2}`); 
    return option_2;
} else {
	console.log("Error, please cancel and re-start!"); 
    let user_secondattempt = prompt("Please choose either Rock, Paper, or Scissors!");
    user_choice = user_secondattempt  ;
}
} 

function computerPlay() {
	const max = 3; 
	const option = Math.floor(Math.random() * Math.floor(max));

	if(option == 0) { 
    	console.log("Computer played Rock");
        return "Rock";
	} else if (option == 1){
    	console.log("Computer played Scissors");
        return"Scissors";
	} else {
    	console.log("Computer played Paper");
 		return "Paper";
	}
}

function roundone(playerSelection, computerSelection) {
   if((playerSelection == "Rock" && computerSelection == "Scissors")) {
   		if (!("Rock">"Scissors")) {
        	message_1 = "You Winn! Rock beats Scissors"; 
            console.log(message_1);
        	return message_1;
         } else {
             console.log("Do nothing"); 
   } } else if ((playerSelection == "Scissors" && computerSelection == "Paper")) {
   		if ("Scissors">"Paper") {
        	 message_2 = "You Winn! Scissors beats Paper"; 
             console.log(message_2);
        	 return message_2;
        } else {
        	console.log("Do nothing"); 
   } } else if (playerSelection == "Paper" && computerSelection == "Rock") {
   		if (!("Paper">"Rock")) {
       		 message_3 = "You Winn! Paper beats Rock"; 
       		 console.log(message_3); 
        	 return message_3; 
        } else {
        	console.log("Do nothing");
   }} else if ((playerSelection == "Scissors" && computerSelection == "Rock")) {
   		if (!("Rock">"Scissors")) {
        	message_4 = "You Looose! Rock beats Scissors";
            console.log(message_4); 
            return message_4; 
        } else { 
       	   console.log("Do nothing");
   }} else if (playerSelection == "Paper" && computerSelection == "Scissors"){
   		if ("Scissors">"Paper") {
        	message_5 = "You Looose! Scissors beats Paper";
            console.log(message_5); 
            return message_5; 
        } else {
       	   alert("Do nothing");
   }} else if (playerSelection == "Rock" && computerSelection == "Paper") {
   		if (!("Paper">"Rock")) {  
        	message_6 = "You Looose! Paper beats Rock";
            console.log(message_6); 
            return message_6; 
        } else { 
       	   console.log("Do nothing"); 
   }} else {
   		console.log("Looks like you came to a draw!"); 
        return "Looks like you came to a draw!";
   }
   } 


function score(test) {
	let find_pos = test.search("Winn!");
    
if (find_pos == 4) {
	++point; 
    console.log(`Here's what you have after Round 1: ${point}`);
    return point; 
} else {
	point += 0;
    console.log(`Here's what you have after Round 1: ${point}`); 
    return point; 
}   
}

function score_2(test_2) {
	let find_pos_2 = test_2.search("Winn!");

if (find_pos_2 == 4) {
	++point; 
    console.log(`Here's what you have after Round 2: ${point}`);
    return point;
} else {
	point += 0;
    console.log(`Here's what you have after Round 2: ${point}`);
    return point;
}
}

function score_3(test_3) {
	let find_pos_3 = test_3.search("Winn!");

if (find_pos_3 == 4) {
	++point; 
    console.log(`Here's what you have after Round 3: ${point}`);
    return point;
} else {
	point += 0;
    console.log(`Here's what you have after Round 3: ${point}`); 
    return point;
}
}

function score_4(test_4) {
	let find_pos_4 = test_4.search("Winn!");

if (find_pos_4 == 4) {
	++point; 
    console.log(`Here's what you have after Round 4: ${point}`);
    return point;
} else {
	point += 0;
   console.log(`Here's what you have after Round 4: ${point}`); 
    return point;
}
}

function score_5(test_5) {
	let find_pos_5 = test_5.search("Winn!");

if (find_pos_5 == 4) {
	++point; 
    console.log(`You have this many points now Round 5: ${point}`);
    return point;
} else {
	point += 0;
    console.log(`You have this many points now Round 5: ${point}`); 
    return point;
}
}