// Your cypher is going to use the 15th letter after the letter you want to use.
// For example, ‘a’ will be ‘p’. Bear in mind that the letters are treated as
// cyclical. That means that ‘p’ will be coded to ‘e’ (the 10th letter after ‘p’ is ‘z’,
// so 5 letters after that will be ‘e’ because the cycle starts again).


/************* PSEUCODE ****************
 * Ask to the user to type a secret message and store it in a variable called "message"
 * Declare a variable called shift in which store the number to shift to create the code
 * Declare two empty variables in which store the ASCII code shifted and the final string to output 
*/
let message =prompt("Type your secret message here:");
console.log(message);
let shift = 15;
let chyper = "";
let chyper15="";

//Create a function that takes the secret message and turns it in ASCII code.The code shifts only lowercase and uppercase letters of 15 positions leaving special 
//characters and spaces as the user type them  
//To do so I divided the ASCII value for letters in uppercase (from 65 to 90) and lowercase (from 97 to 122). 
//I've tried different options (as you can see in test.js) but the right one is a for of loop, that works on each ascii values stored in the array.

function chyperMessage(){//opening function

for(let value of message){//for loop that iterates through every value of variable message
    let ascii = value.charCodeAt();//declare a new variable that stores the values(of message variable) turned in the matching ASCII codes. 
        if ((ascii>= 97) && (ascii<= 122)){ //then, if the ascii code of each value is greater/equal than 97("a") and less or equal than 122("z") 
                chyper = ascii + shift; //the loop will add "let = shift"(15 positions forward) and stores the new ascii value in a variable called "chyper"
                              
            if(chyper > 122){//but if chyper is greater than 122(z letter) meaning: if the ascii value + 15 is greater than 122
              chyper -= 26;//subtract 26 postions from chyper. Why? Because the alphabet is made of 26 letters and 122(z letter) ends the alphabet.
                            /// So to catch the 15th letter after the ascii value we need to start again the cycle of 26 (a-z)
            }
            chyper15 += String.fromCharCode(chyper);//then store the string encoded with the chyper ascii code in chyper15 variable
        }else if ((ascii>= 65) && (ascii<= 90)){// here the process is the same as above but for uppercase letters (65 - 90). I have tried 
                                                // to put everything in an unique statement in 'if' on line 27 but it was messy.
         chyper = ascii + shift;
            if(chyper > 90){
               chyper-= 26;
            }      
            chyper15 += String.fromCharCode(chyper);
      
        }
        else{
            chyper15 += value;// if the value of the message from user is equal to special chars or spaces or something else,
                             // assign to chyper15(the final code)the real value without shifting of 15.
        }
  
    }
}
chyperMessage()//call the function 
alert(`This is your message encoded: \n${chyper15}`);//print the message encoded