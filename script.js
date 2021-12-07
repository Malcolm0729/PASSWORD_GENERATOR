// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password function
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",",","]","^","_","`","{","|","}","~"]


 function generatePassword(){
  var pwLength = prompt("Please create a new password. (It can be less than 8 characters but no more than 25)");
  var passwordPool = []
  var password = []
  //Check for the length and see that its within range
  if (pwLength < 8){
    alert("Please enter a password greater than 8 characters.");
    return "";
 } else if (pwLength > 128) {
    alert("Please enter a password less than 25.");
    return "";
 } else {
    var numbersPrompt = confirm("Be Sure To Add Numbers");
    var lowerPrompt = confirm("Be Sure To Add Lowercase Letters");
    var upperPrompt = confirm("Be Sure To Add UpperCase Letters");
    var specialPrompt = confirm("Be Sure To Add Special Characters");
    
        // If at least one prompt is selected, start adding those characters to the pool
        if (!numbersPrompt && !lowerPrompt && !upperPrompt && !specialPrompt){
          alert("Please select one or more character types");
          return "";
        } 
        if (numbersPrompt) {
          //To know it includes a number character, type a random number.
          var randnum = Math.floor(Math.random() * numbers.length)
          password.push(numbers[randnum]);
      
          for (var i=0; i<numbers.length; i++)  {
            passwordPool.push(numbers[i])
          }
        }
        if (lowerPrompt) {
          //To know it includes a lowercase, type a random lowercase letter.
          var randlow = Math.floor(Math.random() * lowerLetters.length)
          password.push(lowerLetters[randlow]);
          
          for (var i=0; i<lowerLetters.length; i++)  {
            passwordPool.push(lowerLetters[i])
          }
        }
        if (upperPrompt) {
          //To know it includes a uppercase, type a random uppercase letter.
          var randupp = Math.floor(Math.random() * upperLetters.length)
          password.push(upperLetters[randupp]);
          
          for (var i=0; i<upperLetters.length; i++)  {
            passwordPool.push(upperLetters[i])
          }
        }
        if (specialPrompt) {
          //To know it includes a special character, type a random special character.
          var randspec = Math.floor(Math.random() * specialChars.length)
          password.push(specialChars[randspec]);
          
          for (var i=0; i<specialChars.length; i++)  {
            passwordPool.push(specialChars[i])
          }
        } 

        //Start building the password by pulling randomly from the pool.
        for (var i=0; i< pwLength; i++) {
            var random = Math.floor(Math.random() * passwordPool.length)
            password.push(passwordPool[random]);
        }
        //converts the array into a string without seperators
        return password.join("");
        
 }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
