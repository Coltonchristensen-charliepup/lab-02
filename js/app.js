'use strict'

//question one

var userName = prompt('What is your name?');
var guessesRight = 0;
console.log('Hi' + userName);
alert('Hi there ' + userName + '! I hope your day is going well!')

// //question two

var homeLocation = prompt('Am I from Seattle?').toLowerCase();

if (homeLocation === 'yes' || homeLocation === 'y') {
    //     // console.log('Yes I am from Seattle');
    alert('Yes I am from Seattle');
    guessesRight++
}

// // console.log('Nice, ' + homeLocation + ' is great!');


// // question three

var whyCoding = prompt('Have I worked in tech before?').toLowerCase();


if (whyCoding === 'no' || whyCoding === 'n') {
    // console.log('No I have not worked in tech before');
    alert('No I have not worked in tech before');
}

// console.log('That is great that ' + whyCoding + 'is a goal of yours! ');

// // question four

var milVeteran = prompt('Am I a military veteran?').toLowerCase();


if (milVeteran === 'yes' || milVeteran === 'y') {
    // console.log('Yes, I am a veteran');
    alert('Yes, I am a veteran');
    guessesRight++
}


// console.log('Woah! I hear that ' + milVeteran + ' is a amazing!');

// // question five

var carFan = prompt('Do I like cars?').toLowerCase();


if (carFan === 'yes' || carFan === 'y') {
    // console.log('Yes, I love cars!')
    alert('Yes, I love cars!');
    guessesRight++
}
console.log('I like cars too' + carFan + ' my favorite car is a ferrari.');

// question six number game... REMEMBER TO BREAK THE WHILE LOOP

while (true) {
    var attempt = 0;
    var randomNumber = (Math.floor)(Math.random() * 10 + 1)
    var userGuess

    while (attempt < 4) {
        var userGuess = prompt('Guess a number between 1 and 10');

        if (userGuess === randomNumber) {
            alert('You guessed the right number. Winner!');
            guessesRight++
            break;

        } else if (userGuess > randomNumber) {
            alert('You guessed too high');
            attempt++; //guess again
        } else if (userGuess < randomNumber) {
            alert('Your guess is too low');
            attempt++;
        } else {
            alert('Please enter a number!');
        }

        if (attempt === 4 && userGuess !== randomNumber) {
            alert('the right answer was: ' + randomNumber + ' You did not win this time, try again next time!');
        }
    }
    var again = prompt('Try again? type yes/y or no/n').toLowerCase;
    if (again !== 'yes' || again !== 'y') {
        break;
    }
}

// question seven  favorite month

var calMonths = ['february', 'october', 'december'];
var attemptsLeft = 6;
var guessMonth = prompt('What are three of my favorite months?');
var correctMonth = false;

while (attemptsLeft > 0 && !correctMonth) {
    attemptsLeft--;
    for (var i = 0; i < calMonths.length; i++) {
        if (guessMonth === calMonths[i]) {
            correctMonth = true;
            alert('Great! ' + guessMonth + ' is one of my favorite months!');
            guessesRight++
        }
    }
    if (attemptsLeft > 0 && !correctMonth) {
        guessMonth = prompt('Nice guess, but try again!');
    }
    if (attemptsLeft === 0 && !correctMonth) {
        alert('You had SIX TRIES and couldn\'t guess THREE out of 12\?')
    }


}
alert('You\'ve gotten ' + guessesRight + ' correct!')