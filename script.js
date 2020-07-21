// Set variables
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
const sym = "!#$%&~+<@?*^/;:(=)|{";
var globalPWlength = 0;
var yesLower = "N";
var yesUpper = "N";
var yesNum = "N";
var yesSymbol = "N";
var generateBtn = document.querySelector("#generate");


// Prompt instruction for the user to begin
//window.alert("Welcome! Please click 'OK' to generate password!");

//Enter length of password
var numberCharacters = function() {
    //window.location.reload();
    var pwLength = window.prompt("Please select the length of your password. Password can only be bewteen 8 - 128 characters.");
    globalPWlength = parseInt(pwLength);
    if (pwLength === "" || pwLength === null || pwLength < 8 || pwLength > 128) {
        window.alert("You need to provide a valid length! Please try again.");
        return numberCharacters();
    }
}

// Lower case letters Y/N
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

//Upper case letters Y/N
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

//Numbers Y/N
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

//Special characters Y/N
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
    //document.getElementById("password").value = '';
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
            var x = Math.floor(Math.random() * 20);
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
    // Display the results
    document.getElementById("password").innerHTML = genPassword;
}

generateBtn.addEventListener("click", function() {
    document.getElementById("password").innerHTML = "";
    setTimeout(function() {
        numberCharacters();
        lowerCasePrompt();
        upperCasePrompt();
        selectNumberPrompt();
        selectSymbolPrompt();
        generatePassword();
    }, 1000);
});
