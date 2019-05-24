const getSleepHours = getDay => {
    switch(getDay){
      case 'monday':
        return 4;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 10;
        break;
      case 'thursday':
        return 10;
        break;
      case 'friday':
        return 10;
        break;
      case 'saturday':
        return 5;
        break;
      case 'sunday':
        return 5;
        break;   
    }
  }
  
  // se crea funcion y se hace un return implicito,
  //sin llaves {}
  const getActualSleepHours= () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealSleepHours = () => {
    var idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours == idealSleepHours){
      console.log('User has the perfect amount of sleep');
    }else if(actualSleepHours > idealSleepHours){	
      console.log('User has more sleep than needed');
    }else if(actualSleepHours < idealSleepHours){
        console.log('You got ' + (idealSleepHours - actualSleepHours)+ ' hour(s) less sleep than you needed this week, Get some rest.');
    } 
  }
  
  calculateSleepDebt();