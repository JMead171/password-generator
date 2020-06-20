// Set variables
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
const sym = "!#$%&~";
var globalPWlength = 0;
var yesLower = "N";
var yesUpper = "N";
var yesNum = "N";
var yesSymbol = "N";


// Prompt instruction for the user to begin
window.alert("Welcome! Please click 'OK' to generate password!");

//Enter length of password
var numberCharacters = function() {
    var pwLength = window.prompt("Please select the length of your password. Password can only be bewteen 8 - 128 characters.");
    globalPWlength = parseInt(pwLength);
    console.log(pwLength);
    if (pwLength === "" || pwLength === null || pwLength < 8 || pwLength > 128) {
        window.alert("You need to provide a valid length! Please try again.");
        return numberCharacters();
    }
}

// Lower case letters
var lowerCasePrompt = function() {
    var lowerCase = window.prompt("Would you like your password to contain lower case letters Y/N ?")
    if (lowerCase === "" || lowerCase === null) {
            window.alert("You need to provide a Y/N! Please try again.");
            return lowerCasePrompt();
    } 
    else {
        if (lowerCase ==="Y" || lowerCase ==="y") {
            yesLower = "Y";
        } else {
            yesUpper = "N";
            if (lowerCase !== "N" && lowerCase !== "n") {
                window.alert("You need to provide a Y/N! Please try again.");
                return lowerCasePrompt();   
            }
        }
    }
}

//Upper case letters
var upperCasePrompt = function() {
    var upperCase = window.prompt("Would you like your password to contain UPPER CASE letters Y/N ?");
    if (upperCase === "" ||upperCase === null) {
        window.alert("You need to provide a Y/N! Please try again.");
        return lowerCasePrompt();
    }
    else {
        if (upperCase ==="Y" || upperCase ==="y") {
            yesUpper = "Y";
        } else {
            yesUpper = "N";
            if (upperCase !== "N" && upperCase !== "n") {
                window.alert("You need to provide a Y/N! Please try again.");
                return upperCasePrompt();   
            }
        }
    }
}

//Numbers
var selectNumberPrompt = function() {
    var selectNumber = window.prompt("Would you like your password to contain numbers Y/N ?");
    if (selectNumber === "" || selectNumber === null) {
        window.alert("You need to provide a Y/N! Please try again.");
        return selecNumberPrompt();
    }
    else {
        if (selectNumber ==="Y" || selectNumber ==="y") {
            yesNum = "Y";
        } else {
            yesNum = "N";
            if (selectNumber !== "N" && selectNumber !== "n") {
                window.alert("You need to provide a Y/N! Please try again.");
                return selectNumberPrompt();   
            }
        }
    }
}

//Special characters
var selectSymbolPrompt = function() {
    var selectSymbol = window.prompt("Would you like your password to contain symbols Y/N?");
        if (selectSymbol === "" || selectSymbol === null) {
            window.alert("You need to provide a Y/N! Please try again.");
            return selectSymbolPrompt();
    }
    else {
        if (selectSymbol ==="Y" || selectSymbol ==="y") {
            yesSymbol = "Y";
        } else {
            yesSymbol = "N";
            if (selectSymbol !== "N" && selectSymbol !== "n") {
                window.alert("You need to provide a Y/N! Please try again.");
                return selectSymbolPrompt();   
            }
        }
    }
};

//Generate a password
var generatePassword = function() {
    console.log(globalPWlength);
    var genPassword = "";
    for(var i = 0; i < globalPWlength;) {
        if (yesLower === "Y") {
            var x = Math.floor(Math.random() * 26);
            genPassword += abcLower[x];
            i++;
        }

        if (yesUpper === "Y") {
            var x = Math.floor(Math.random() * 26);
            genPassword += abcUpper[x];
            i++;
        }

        if (yesNum === "Y") {
            var x = Math.floor(Math.random() * 10);
            genPassword += num[x];
            i++;
        }

        if (yesSymbol === "Y") {
            var val = Math.floor(Math.random() * 6);
            console.log("Special Char = " + genPassword);
            genPassword += sym[x];
            i++;
        }
        
        //Final check for all "N" selected
        if (yesLower !=="Y") {
            if (yesUpper !=="Y") {
                if (yesNum !=="Y") {
                    if (yesSymbol !=="Y") {
                        window.alert("You cannot select 'No' for every option.  Goodbye!");
                        break;
                    }
                }
            }        
        }
    }
    // Display the result
    document.getElementById("password").innerHTML = genPassword;
}

numberCharacters();
lowerCasePrompt();
upperCasePrompt();
selectNumberPrompt();
selectSymbolPrompt();

//Check if all "N" was selected
if (yesLower !=="Y") {
    if (yesUpper !=="Y") {
        if (yesNum !=="Y") {
            if (yesSymbol !=="Y") {
                window.alert("You cannot select 'No' for every option.  Try again!");
                numberCharacters();
                lowerCasePrompt();
                upperCasePrompt();
                selectNumberPrompt();
                selectSymbolPrompt();
            }
        }
    }        
}

generatePassword();


// Add event listener to generate button 
// Get references to the #generate element
// Write password to the #password input

//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;
//}

//.var get = document.querySelector("#generate");
//    generateBtn.addEventListener("click", writePassword);