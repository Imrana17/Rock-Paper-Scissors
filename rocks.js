/*  const score = {
        wins: 0,
        losses: 0,
        ties: 0
        };
        */
     


        let score=(JSON.parse(localStorage.getItem('score')));
        if (score === null) {
          score = {
              wins: 0,
              losses: 0,
             ties: 0
        };
      }
  
      updateScore();
  
  
      function playerGame(playerMove){
          const computerMove=pickComputerMove();
  
          result = '';
          if(playerMove === 'scissor'){
              if(computerMove === 'rock') {
          result= 'You lose';
          }
          else if(computerMove === 'paper') {
          result= 'You win';
          }
          else if(computerMove === 'scissor'){
          result='Tie';
          }
  
  
          if(result==='You win'){
              score.wins+=1;
          } 
          else if(result==='You lose'){
          score.losses+=1;
          } 
          else if(result==='Tie'){
              score.ties+=1;
          }
  
  
          document.querySelector('.js-result').innerHTML = result;
          document.querySelector('.js-moves').innerHTML = `You 
                 <img src="${playerMove} sign.png" class="move-icon" alt="rock image">
                  <img src="${computerMove} sign.png" class="move-icon" alt="scissor image"> Computer`;
  
  /*
          alert(`You ${playerMove}. Computer picked ${computerMove}. ${result}
          wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
          `);
          */
          
          }
          
  
  
          if(playerMove==='rock'){
              const computerMove=pickComputerMove();
  
              let result = '';
          if(computerMove === 'rock') {
              result= 'Tie';
          }
          else if(computerMove === 'paper') {
              result= 'You lose';
          }
  
          else if(computerMove === 'scissor'){
              result= 'You win';
          }
  
          if(result==='You win'){
              score.wins+=1;
          } 
          else if(result==='You lose'){
          score.losses+=1;
          } 
          else if(result==='Tie'){
              score.ties+=1;
          }
  
          document.querySelector('.js-result').innerHTML = result;
          document.querySelector('.js-moves').innerHTML = `You 
                <img src="${playerMove} sign.png" class="move-icon" alt="rock image">
                  <img src="${computerMove} sign.png" class="move-icon" alt="paper image"> Computer
              `;
         
        /*
          alert(`You ${playerMove}. Computer picked ${computerMove}. ${result}
          wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
          */
          }
          
  
  
          if(playerMove==='paper'){
              const computerMove=pickComputerMove();
  
          let result = '';
          if(computerMove === 'rock') {
          result= 'You win';
          }
          else if(computerMove === 'paper') {
          result= 'Tie';
          }
  
          else if(computerMove === 'scissor'){
          result= 'You lose';
          }
  
          if(result==='You win'){
              score.wins+=1;
          } 
          else if(result==='You lose'){
          score.losses+=1;
          } 
          else if(result==='Tie'){
              score.ties+=1;
          }
  
          localStorage.setItem('score', JSON.stringify(score));
  
  
         updateScore();
  
         document.querySelector('.js-result').innerHTML = result;
  
         document.querySelector('.js-moves').innerHTML = `You 
                  <img src="${playerMove} sign.png" class="move-icon" alt="paper image">
                  <img src="${computerMove} sign.png" class="move-icon" alt="scissor image"> Computer`;
  
         /* alert(`You ${playerMove}. Computer picked ${computerMove}. ${result}
          wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
          */
          }
      
       }
  
          function updateScore() {
              document.querySelector('.js-score')
              .innerHTML =   `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
          }
  
       function pickComputerMove() {
          const randomNumber=Math.random();
          let computerMove='';
          if(randomNumber>=0 && randomNumber<1/3)
          {
          computerMove='rock';
          } 
          else if(randomNumber>=1/3 && randomNumber<2/3)
          {
          computerMove='paper';
          }
          else if(randomNumber>=2/3 && randomNumber<1)
          {
              computerMove='scissor';
          }
          console.log(computerMove);
          return computerMove;
       }