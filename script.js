// Assignment Code
  var generateBtn = document.querySelector("#generate");
  var specialCharactersArr =["!","@","#","$","%","^","&","*","(",")"]
  var lowerCaseArr = ["a","b","c","d","e","f","g","i","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCaseArr =["A","B","C","D","E","F","G","I","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbersArr = ["1","2","3","4","5","6","7","8","9"]
  
   
 

  function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password 
 
  }
  function generatePassword() {
    var allChar =[];
   

    var passwordLength = prompt('How many characters do you want in your password?', 'must be between 8 and 128');

      if(passwordLength < 8 || passwordLength > 128){
          window.alert('Must be between 8 and 128')  
      } 
          else{
           if(confirm('Would you like Uppercase letters in your password?')){
        
           allChar.push.apply(allChar, upperCaseArr)
           }

           if(confirm('Would you like lowercase letters in your password?')){
          
           allChar.push.apply(allChar, lowerCaseArr)
           }

           if(confirm('would you like numbers in your Password?')){
          
          allChar.push.apply(allChar, numbersArr)
          }

          if(confirm('Would you like Special Characters in the password?')) {
          
          allChar.push.apply(allChar, specialCharactersArr)
          }
 
          if(allChar.length === 0){
          alert('You must select at least 1 character type to make a password.')
          }
         
            // randomize allChar
            allChar.sort((a,b) => 0.5 - Math.random())
              allChar.length = passwordLength
          
  }
  var finalPassword = document.getElementById("password").innerHTML = allChar.join('');
  document.appendChild(finalPassword)
  console.log(allChar)
  
  
}
  
 generateBtn.addEventListener('click', writePassword)
  

