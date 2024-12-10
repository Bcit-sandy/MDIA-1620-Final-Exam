const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

Planning:
This system contains 2 functions
1. ShowStatus():Read through the list and show points of each mode: "new", "easy", "medium", "hardest", and "apocolypse"
2. AddPoints(): Add points to the mode by +1 

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

let badge = {
  new: 0,
  easy: 0, 
  medium: 0, 
  hardest:0, 
  apocolypse: 0
  //modes go here
};

//rename this to ShowStatus
function ShowStatus(){
  for ( let mode in badge) {
    console.log ( `Mode: ${mode} , Current Points: ${ badge[mode]} ` );
  //loop through the badge and log all the mode and all their corresponding points
  StartApp ();
  }
}

//rename this to AddPoints
function AddPoints(){
  readline.question("Which mode do you want to add a point?", mode =>{
    if (mode === "new"){
      console.log(`Badge new has won a point! Current points: ${badge.new +1}`);
      badge[mode]++;
    } else if (mode === "easy"){
      console.log(`Badge new has won a point! Current points: ${badge.easy +1}`);
      badge[mode]++;
    } else if (mode === "medium"){
      console.log(`Badge new has won a point! Current points: ${badge.medium +1}`);
      badge[mode]++;
    } else if (mode === "hardest"){
      console.log(`Badge new has won a point! Current points: ${badge.hardest +1}`);
      badge[mode]++;
    } else if (mode === "apocolypse"){
      console.log(`Badge new has won a point! Current points: ${badge.apocolypse +1}`);
      badge[mode]++;
    }else {
      console.log ("Unknown mode, please try again!")
    }
    StartApp ();
  })
}

//CHALLENGE 1
function MakeBadge(){
    let total = 0 ;
    for (mode in badge ){
    //add numbers together to total
    total = total + badge[mode];
    let Status = "" ;
    } if ( total < 10 ){
    Status = "horrible newbie" ;
    } else if ( total >= 10 && total < 20 ){
    Status = "adventurer" ;
    } else if ( total >= 20 && total < 30 ){
    Status = "slayer" ;
  } else if ( total >= 30 && total <= 40 ){
    Status = "divined" ;
    } else if ( total > 40 ){
    Status = "eternal" ;
    } console.log ( `Number of total task: ${ total } , Status: ${ Status } ` )
    StartApp ();

}


function StartApp (){
  readline.question ( "What is your command? " , command => {
  if ( command === "quit" ){
    readline.close ();
  } else if ( command === "show" ){
    ShowStatus();
  } else if ( command === "add" ){
    AddPoints();
  } else if ( command === "total" ){
    MakeBadge();
  } else {
    console.log ( "Try again!" );
    StartApp ()
  }})
}

StartApp ();