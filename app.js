// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 


// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
// rot13("SERR YBIR?") should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


let decodeBtn = document.querySelector(".decode");
let inputText = document.getElementById('codedInput');

let encodedString = prompt('Enter your encoded string: ', "");

let numOfLetters = 26;
let offSet = 13;

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v', 'w', 'x', 'y', 'z']


console.log(foo);
decodeBtn.addEventListener('click', rot13(encodedString));


// decode each element on the array if is a letter.
// join the array


function rot13(aString){
    // string to uppercase.
    let lowercaseString = aString.toLowerCase();
    // get string into an arr
    let arr = [];
    for(i=0 ;i<lowercaseString.length; i++){
        arr.push(uppercaseString[i]);
    }
    console.log(arr);
    arr.map((value, index, array) => {
        if(alphabet.indexOf(value) !== -1){
            // decode character
        }
    })

    //return anotherString;
}

// if alphabet.indexOf(char) != 1 do this
function cypherOneChar(char, offSet) {
    let charPosition = alphabet.indexOf(char);
    let newCharPosition;
    if(charPosition + offSet <= numOfLetters - 1) {
        newCharPosition = charPosition + offSet;
    } else {
        console.log('GOT HERE');
        newCharPosition = offSet - numOfLetters + charPosition;
        
    }

    return alphabet[newCharPosition];
}


// (alphabetLength - charPosition) + result = offSet;