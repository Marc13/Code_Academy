const getSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getActualSleepHours = () => {
return getSleepHours('monday') +
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');
};
console.log(getSleepHours('monday'));
console.log(getActualSleepHours()); 

const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  const actualSleepHours = 
  getActualSleepHours();
  const idealSleepHours = 
  getIdealSleepHours(8);

if (actualSleepHours === idealSleepHours) 
{
  console.log("You've got a perfect amount of sleep time!");
} 
else if (actualSleepHours > idealSleepHours) 
{
  console.log("You've got " + (actualSleepHours - idealSleepHours ) + " more hours of sleep this week.");
   } 
else if(actualSleepHours < idealSleepHours) 
{
    console.log("Ideally, you should get some more rest because you've slept "  + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
   }
else {
  console.log('Error! Sorry, something went wrong, check your code.');
}
};

calculateSleepDebt(); 