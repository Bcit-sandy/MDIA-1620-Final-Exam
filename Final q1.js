const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. 

When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

//Planning
//This application will contain 3 functions
// Function 1: register the age of each customer with RegisterUser() --> Add number to a list using an array (registry.push(input)) 
//Function 2: Set up a toggle function for alcohol: true/false with ToggleAlcohol() --> settings.alcohol = !settings.alcohol
// Function 3: Read through the list and NotifyAll() --> when setting.alcohol is true and >=19, console.log "You are allow to drink in here.", else, console.log "You are not allowed in here."
--> when setting.alcohol is false, console.log "Everyone is welcome in here!"


CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.
When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

let registry = [];
let settings = {
  alcohol: true,
  Age: false, // command "change age" to toggle this setting
  VIP: false  
  //command "make vip" --> assign a number 
  //command "cancel vip" to toggle this setting to turn off
};

//rename this to RegisterUser
function RegisterUser(){
    readline.question("How old are you?", age =>{
        //ask for the age with readline
        registry.push(age)
        console.log("User's age has been registered!")
        StartApp ();
    })
}

//rename this to ToggleAlcohol
function ToggleAlcohol(){
    settings.alcohol = !settings.alcohol                        //toggle alcohol setting
  console.log(`Alcohol setting has been toggled! The status is now ${settings.alcohol}!`)
  StartApp ();
}

function ListAge(){
    for ( let age in registry ){
        console.log ( `${registry[age]}`);
        StartApp()
    }}                          // check list 

//rename this to NotifyAll
function NotifyAll(){
    if ((settings.alcohol === true) && (registry.age >= 19)){
        console.log ("You are allow to drink in here.")
    } else if ((settings.alcohol === true) && (registry.age < 19)){
        console.log ("You are not allowed to drink in here.")
    } else {
        console.log("Everyone is welcome in here!")
    } StartApp();
}


//CHALLENGE 1
function ChangeAge(){
  readline.question("What is the new drinking age?", _old =>{
    settings.Age = !settings.Age                    //change drinking age
    console.log(`Age setting has been toggled! The status is now ${settings.Age}!`)
    if (settings.Age === true){
    console.log(`New drinking age is now ${_old}! Wohoo!`);
    StartApp ();
    } else {
        console.log ("Sorry! Drinking age is always at least 19!")
        StartApp ();
    }
  })
  StartApp ();
}


function StartApp (){
  readline.question ( "What is your command? " , command => {
    if ( command === "quit" ){
      readline.close ();
    } else if (command === "add"){
      RegisterUser ();
    } else if (command === "toggle"){
      ToggleAlcohol ();
    } else if ( command === "notify" ){
      NotifyAll ();
    } else if ( command === "list" ){
        ListAge ();
    } else if ( command === "change age" ){
        ChangeAge();
    } else {
      console . log ("Please try again.")
      StartApp ()
    }
  })
}
  StartApp ();