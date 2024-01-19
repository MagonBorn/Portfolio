const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 9;
      break;
    case 'tuesday':
      return 9;
      break;
    case 'wednesday':
      return 9;
      break;
    case 'thursday':
      return 8.5;
      break;
    case 'friday':
      return 8.5;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep';
  } else if (actualSleepHours > idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} hours more sleep than required`;
  } else if (actualSleepHours < idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} hours less sleep than required, go get some rest`;
  }
}

console.log(calculateSleepDebt());