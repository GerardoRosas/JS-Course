const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    /*userInput === 'rock' ? return userInput :  console.log('Invalid input');
    userInput === 'paper' ? return userInput : 	console.log('Invalid input');
    userInput === 'scissors' ? return userInput : console.log('Invalid input'); */
    if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
        return userInput;
      }else{
                  return 'Invalid Input';
      }
  }
  
  const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3); //Tomamos un numero entre 0 y 3 para determinar si sale piedra papel o tijera
    
    switch(randomNumber){
      case 0:
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    
    }
  }
  
  const determinateWinner = (userChoice, computerChoice) => {
    if(userChoice == computerChoice){
      return 'It is a tie';
    }else if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer wins';
      }else{
        return 'User wins';
      }
    }else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer wins';
      }else{
        return 'User wins';
      }
    }else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer wins';
      }else{
        return 'User wins';
      }
    }
  }
  
  const playGame = () => {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    
    console.log('You threw: ' +userChoice);
    console.log('Computer threw: ' +computerChoice);
    
    console.log(determinateWinner(userChoice, computerChoice));
  }
  
  playGame();
  