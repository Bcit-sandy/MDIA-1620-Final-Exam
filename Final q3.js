const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/


/*
Planning:
This application will contain 3 functions
1. AddUserColor(): Allow to add color when only they are part of the 5 colors in theme + call DisplayUserColors()
2. DisplayUserColors(): Read through the list 
3.ToggleThemeColor(): Toggle color setting specifically with a noti readline of what has been toggled

Will have to add a remove function --> remove diabled color from the list
*/

let userColors = [];
let theme = {
  red: true,
  green: true,
  blue: true,
  yellow: true,
  orange: true
  //the 5 color and their boolean value goes here
};

//rename this to AddUserColor
function AddUserColor(){
  readline.question ("What color do you want to add to the list?", color =>{
    if ((color === "red") || (color === "green") || (color=== "blue") || (color=== "yellow") || (color === "orange")){
      if (theme[color] === false){
        console.log ( `Adding ${color} is currently disabled!`);
        StartApp();
      }else{
        userColors.push(color);
        console.log(`${color} has been added to the list!`)}
      } else {
        console.log("Only can add red, green, blue, yelloe, or orange!")
      }
      DisplayUserColors();
      StartApp();
    })
  }


//rename this to DisplayUserColors
function DisplayUserColors(){
  console.log ("Here is the list of color:");
  for (let color in userColors){
    console.log(`${userColors[color]}`)
  }
  StartApp ();
}

//adding a remove function to remove a specific color 
function RemoveColor(){
  readline.question("Please type in the color you want to remove:", color =>{
  if (userColors.includes(color)){
    userColors = userColors.filter(Choice => Choice !== color)
    console.log(`${color} has been removed from the list`);
    StartApp();
  }})
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  readline.question("Which color theme you want to toggle setting?", color =>{
    if (theme.hasOwnProperty(color)){
      theme[color] = !theme[color];
      console.log(`${color} setting has been toggled! It is now ${theme[color]? "enable": "disbaled"} .`)
      RemoveColor();                  // call RemoveColor to remove the disabled color
      DisplayUserColors();            // callDisplayUserColors to show the userColors list
    } else{
      console.log(`${color} is not in the list. Please try again!`);
    }
    StartApp();
  })
}

function StartApp (){
  readline . question ("What is your command? " , command => {
  if ( command === "quit" ){
    readline . close ();
  } else if ( command === "add" ){
    AddUserColor ();
  } else if ( command === "remove" ){
    RemoveColor ();
  } else if ( command === "display" ){
    DisplayUserColors ();
  } else if ( command === "toggle" ){
    ToggleThemeColor ();
  } else {
    console . log ( "Try again!" );
    StartApp ();}
  })
}
  StartApp ();