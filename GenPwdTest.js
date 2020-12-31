var passwordSourceString = '';

// FUNCTION buildSourceStr
// Set up global passwordSourceString for the password generator
// by including the user's choice of character types
// Return the user's specified password length

function buildSourceStr() {
  var specifyLengthPrompt = 'Specify password length by entering a number between ';
  const minPasswordLength = 8;
  const maxPasswordLength = 128;
  const defaultPasswordLength = 12;

  var useLower = false;
  var useUpper = false;
  var useNum = false;
  var useSpecial = false;

  // prompt user until at least one character
  // type has been selected
  var selectionMade = false;
  while (!selectionMade) {
    useLower = confirm('Do you want to include lower case letters?');
    useUpper = confirm('Do you want to include UPPER case letters?');
    useNum = confirm('Do you want to include numbers?');
    useSpecial = confirm('Do you want to include special characters like \'#\' and \'$\'?');

    // Make sure we got at least one selection
    selectionMade = (useLower || useUpper || useNum || useSpecial);
    if (!selectionMade) alert('Please pick at least one  type to continue');
  }
  // Get the user-defined password length
  var pwdLength = 0;
  specifyLengthPrompt = specifyLengthPrompt.concat(minPasswordLength, ' - ', maxPasswordLength);
  // prompt for a length between the boundary constants
  while ((pwdLength < minPasswordLength) || (pwdLength > maxPasswordLength)) {
    pwdLength = Number(prompt(specifyLengthPrompt, defaultPasswordLength));
    console.log("pwd length is " + pwdLength);
  }
  // create a source array of password characters that only
  // includes the types chosen by the user 
  
  if (useLower) {
    passwordSourceString = passwordSourceString.concat('abcdefghijklmnopqrstuvwxyz');
  }
  if (useUpper) {
    passwordSourceString = passwordSourceString.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  if (useNum) {
    passwordSourceString = passwordSourceString.concat('0123456789');
  }
  if (useSpecial) {
    passwordSourceString = passwordSourceString.concat('\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/');
  }

  console.log('source string is ', passwordSourceString);
  console.log('srcStrLen is ', passwordSourceString.length);

  // return the desired password length 
  return (pwdLength);
}
// *****************************************
// FUNCTION genRandomInt (num1, num2)
// Returns random integer between num1 & num2
// Including num1 & num2
  
function getRandomInt(min, max) { 
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

// *****************************************
// FUNCTION generate Password 
// Given picks random characters out of
// global passwordSourceString and
// the (global) password soruce string
// Pick characters at random out of the source
// string until the password is the right length
// Returns: password string

function generatePassword() {

  // get password length and buid password source string 
  var pwLength = buildSourceStr();

  // put first letter in password string
  var ssIndex = [getRandomInt(0, (passwordSourceString.length-1))]
  var pw = passwordSourceString[ssIndex];

  // add the rest of the password letters

  for (i = 1; i < pwLength; i++) {
    ssIndex = [getRandomInt(0, (passwordSourceString.length-1))]
    pw = pw.concat(passwordSourceString[ssIndex]);
    
    console.log('ssIndex ' + ssIndex);
    console.log('pw ' + i + ' is ' + pw);
   }
  return (pw);
}
// ***************************************************
// MAIN PROGRAM
// ***************************************************


// call generatePassword to build a user-specified
// source-string for the password and then generate
// a random password from that string
var Password;
for (i = 0; i < 10; i++) { 
  Password = generatePassword();
  console.log('new password is ' + Password);
}
