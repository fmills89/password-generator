// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function passwordParameters () {
  pickCharacters = window.prompt("Please choose length of password. Password characters much be no less that 8 and no more than 128 characters.");

    //Verifying if characters length is within 8-128 characters.
    if (pickCharacters < 8 || pickCharacters > 128) {
      window.alert("Length must be no less than 8 and no more than 128 characters. Please try again.")
      passwordParameters();
    } else {

        chooseUpper = confirm("Do you want capital letters?");
        chooseLower = confirm("Do you want lowercase letters?");
        chooseNum = confirm("Do you want numbers?");
        chooseSpec = confirm("Do you want special characters?");

        if ((chooseUpper == false) && (chooseLower == false) && (chooseNum == false) && (chooseSpec === false)){
          alert("You must choose from one of the criteria.")
          passwordParameters();
        }
   }
};

function generatePassword() {
  passwordParameters();
  
  // Arrays to hold characters
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var num = ['0','1','2','3','4','5','6','7','8','9'];
  var spec = ['!','@','#','$','%','^','&','*','(',')','_','+','~','`','|','}','{','[',']',':',';','?','>','<',',','.','/','-','='];
  
  // Empty array to push random results to
  var password = [];

  // If true/false run random and grab random results from arrays
  if (chooseUpper){
    var randUpper = upperCase[Math.floor(Math.random()*(upperCase.length-1))];
    // push results to password array
    password.push(randUpper);
  }
  if (chooseLower){
    var randLower = lowerCase[Math.floor(Math.random()*(lowerCase.length-1))];
    password.push(randLower);
  }
  if (chooseNum) {
    var randNum = num[Math.floor(Math.random())*(num.length-1)];
    password.push(randNum);
  }
  if (chooseSpec) {
    var randSpec = spec[Math.floor(Math.random()*(spec.length-1))];
    password.push(randSpec);
  }

    //
    var request = pickCharacters - password.length;

     

    for (var i = 0; i < request; i++){
      var loopRand = [Math.floor(Math.random()*(password.length-1))];
      password.push(loopRand);
      console.log(password);
    }

    return password.join("");

};


// Left undefined for true/false
var chooseUpper = "";
var chooseLower = "";
var chooseNum = "";
var chooseSpec = "";

// Global var for pickCharacters
var pickCharacters = [];




// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
