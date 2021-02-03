const getSleepHours = day => {
switch(day) {
  case 'monday':
  return 8
  break;
  case 'monday':
  return 8
  break;
  case 'tuesday':
  return 7
  break;
  case 'wednesday':
  return 6
  break;
  case 'thursday':
  return 5
  break;
  case 'friday':
  return 4
  break;
  case 'saturday':
  return 3
  break;
  case 'sunday':
  return 2
  break; 
default:
  return 'Error!'
  }
};

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

const getIdealSleepHours = () => {
  let idealHours = 6;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = 
  getActualSleepHours();
  const idealSleepHours = 
  getIdealSleepHours();

if (actualSleepHours === idealSleepHours) 
{
  console.log('Yout a perfect amount of sleep time!');
} 
else if (actualSleepHours > idealSleepHours) 
{
  console.log("You've got" + (actualSleepHours - idealSleepHours ) + "more hours of sleep this week.");
   } 
else if(actualSleepHours < idealSleepHours) 
{
    console.log("Ideally, you should get some more rest because you've slept "  + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
   }
else {
  console.log('Error! Sorry, something eent wrong, check your code.');
}
};

calculateSleepDebt(); //prints Ideally, you should get some rest...