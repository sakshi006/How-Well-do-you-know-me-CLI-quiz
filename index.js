var readSync = require("readline-sync")
var c = require("chalk")

var name=readSync.question("Enter your name : ");
console.log(c.bold("Hey " +name));
console.log("Welcome to DO YOU KNOW Sakshi!?\n");
var score = 0;

var questions = [
  {
    ques: "How old am I? ",
    ans: "21",
  },
  {
    ques: "Where do i live? ",
    ans: "kanpur",
  },
  {
    ques: "Which day coincides with the day before my birthdate? ",
    ans: "World Water Day",
  },
  {
    ques: "Which outdoor game is my favourite? ",
    ans: "Basketball",
  },
  {
    ques: "What is my favourite South-Indian dish? ",
    ans: "Dosa",
  },
  {
    ques: "Do i like F.R.I.E.N.D.S? ",
    ans: "yes",
  },
  {
    ques: "Have i watched GOT? ",
    ans: "no",
  },
]


function play(ques, ans) {
  var userans = readSync.question(c.italic.bold(ques));
  if (ans.toUpperCase() === userans.toUpperCase()) {
    console.log(c.green.bold("Wohhoooo! That's right\n"));
    score += 1;
  }
  else {
    console.log(c.red("Nevermind!\n"));
  }
  console.log(c.magenta("------------------\n"));
  return score;
}

for (var i = 0; i < questions.length; i++)
  var result = play(questions[i].ques, questions[i].ans);


console.log(c.inverse("The highest achievable score is 7 \n"))
console.log(c.bgCyan("Your score is " + result+" \n"));
//console.log("High Score : " + highScore);
if(score===7)
{
  console.log(c.inverse("YAYAYYA! you score the highest!!  \n"));
}
else
 console.log(c.inverse("uhuu!! \n"+" Better luck next time xD  \n"));

console.log(c.bold.italic.inverse("  Thanks for playing!  "));