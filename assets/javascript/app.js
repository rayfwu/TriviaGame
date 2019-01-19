var number = setInterval(countDown, 1000);

var seconds = 5;

$("#timer").text(seconds);

function countDown() {
    seconds--;
    $("#timer").text(seconds);
    console.log(seconds);
    if (seconds <= 0) {
        clearInterval(number);
        $("#timer").text("Time's up!");
    }
}

function MultiChoice(question, choices, answer) {
    this.question = question;
    this.choices  = choices;
    this.answer   = answer;
    this.show     = function() {
        $("#questions").text(this.question);
        $("#choices").text("todo");
    }
}

var aChoice = new MultiChoice("What did Jenny from 'Forrest Gump' die of?", ["AIDS", "Influenza", "Cancer", "A broken heart"], 0);
aChoice.show();

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   console.log(d.toLocaleTimeString());
//   //document.getElementById("#timer").innerHTML = d.toLocaleTimeString();
// }