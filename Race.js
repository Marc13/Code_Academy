let runnerNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 25;

if (runnerAge > 18 && registeredEarly === true) {
runnerNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Your race starts at 9:30am, and your race number is ${runnerNumber}. Good luck!`);
}
 else if (runnerAge > 18 && registeredEarly === false)
 {
  console.log(`Your race starts at 11:00am, and your race number is ${runnerNumber}. Relax!`)
}

else (runnerAge < 18) 
console.log(`Your race starts at 12:30pm, and your race number is ${runnerNumber}. Good luck!`)