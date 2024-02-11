//const prompt = require('prompt-sync')();
function calculateMaxSum()
 {
    let sum = 0;
    let count = 0;
    while (count < 10) 
    {
      var number = 5;
      if (number < 0) 
      {
        break; 
      }
      sum += number;
      count++;
    }
    console.log("Sum:", sum);
  }
  calculateMaxSum();  

/*---------------------------------------*/