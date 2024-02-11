let ar = [1,2,3,4,5];
function avg(a)
{
    l = ar.length;
    let sum = 0;
    for(var i=0;i<l;i++)
    {
        sum += ar[i];
    }
    return sum/l;
}
var ans =avg(ar);
console.log(ans);

/*--------------------------------*/

function countVowels() 
{
    let name = "Sangameshwar";
    //let name = prompt("Enter your name:");
    let vowelCount = 0;
  
    for (let char of name.toLowerCase()) 
    {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
      {
        vowelCount++;
      }
    }
    console.log("Number of vowels in the name:", vowelCount);
}
 countVowels();

/*-----------------------------------------------------------------------------------*/
  
class GuviStudent
{
    constructor(mark1, mark2) 
    {
      this.mark1 = mark1;
      this.mark2 = mark2;
    }
  
    printMarks() 
    {
      console.log("Mark 1:", this.mark1);
      console.log("Mark 2:", this.mark2);
    }
}
  
  // Create objects
  let student1 = new GuviStudent(85, 92);
  let student2 = new GuviStudent(78, 88);
  
  // Print marks
  student1.printMarks();
  student2.printMarks();
  
/*---------------------------------------------------*/