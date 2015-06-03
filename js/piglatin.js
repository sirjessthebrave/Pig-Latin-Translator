var outputArea = document.getElementById("textOutput");
var textBox, englishText, englishArray;
var englishString = "";

var vowelRule = /[aeiou]/i;
var consonantsRule = /[bcdfghjklmnpqrstvwxyz]/i;
var punctuationRule = /\W/g;
var capitalizationRule = /[A-Z]/;

function getEnglish() {
    
    textBox = document.getElementById("English");
    englishText = textBox.value;
    
    // create an array using a space as a delimiter
    englishArray = englishText.split(" ");
    
    outputPigLatin();
    
}

function outputPigLatin() {
    
    // remove old text
    englishString = "";
    
    convertEnglishToPigLatin();
    
    outputArea.innerHTML = englishString;
    
}


function handleVowels(word) {
           
    word += "way ";
       
    return word;
    
}

function handleConsonants(word) {

    var firstLetter = word.charAt(0);
    
    word = word.slice(1);
    
    word += firstLetter + "ay";
    
    return word;
    
}

function handleDoubleConsonants(word) {
    
    var firstLetter = word.charAt(0);
    var secondLetter = word.charAt(1);
    
    word = word.slice(2);
    
    word += firstLetter + secondLetter + "ay";
        
    return word;
    
}

function recapitalize(word) {
        
    var firstLetter = word.charAt(0);
    
    word = word.toLowerCase();
    word = word.slice(1);
    
    firstLetter = firstLetter.toUpperCase();
    
    word = firstLetter + word;
    
    return word;
    
}

function checkCapitalization(word) {
    
    var recapitalize;
    var firstLetter = word.charAt(0);
    var capitalMatch = capitalizationRule.exec(firstLetter);
        
    if (capitalMatch) {
            
        recapitalize = true;
        
    }
        
    else {
            
        recapitalize = false;
            
    }
    
    return recapitalize;
    
}

function checkPunctuation(word) {
    
    console.log("Checking punctation of word: " + word);
    
    var hasPunctuation;
    var punctuationMatch = punctuationRule.exec(word);
    
    console.log("Punctuation match is: " + punctuationMatch);
    
    if (punctuationMatch) {
        
        hasPunctuation = true;
        
    }
    
    else {
        
        hasPunctuation = false;
        
    }
    
    console.log("Value of hasPunctuation is " + hasPunctuation);
    
    return hasPunctuation;
    
}

function removePunctuation(word) {

    var punctuationMatch = punctuationRule.exec(word);
    
    var newWord = word.replace(punctuationMatch, "");
    
    console.log("Remove punctuation: " + newWord);
    
    return newWord;

}

function convertEnglishToPigLatin() {
    
    var englishWord;
    
    for (var i = 0; i < englishArray.length; i++) {
        
        englishWord = englishArray[i];
        
        console.log("englishWord at beginning of array: " + englishWord);
        
        var firstLetter = englishWord.charAt(0);
        var secondLetter = englishWord.charAt(1);
        
        var vowelMatch = vowelRule.exec(firstLetter);
        var consonantMatch = consonantsRule.exec(firstLetter);
        var doubleConsonantMatch = consonantsRule.exec(secondLetter);
        
        // englishWord = removePunctuation(englishWord);
        
        //console.log("englishWord after removepunction: " + englishWord);
        
        checkCapitalization(englishWord);
        
        checkPunctuation(englishWord);
        
        //console.log("checkPunctuation result: " + checkPunctuation(englishWord));
        
        if (vowelMatch) {
            
            englishWord = handleVowels(englishWord);
            
            console.log("englishWord after checking vowels: " + englishWord);
            
        }
        
        if (consonantMatch && !doubleConsonantMatch) {
            
            englishWord = handleConsonants(englishWord);
            
            console.log("englishWord after checking consonants: " + englishWord);
            
        }
        
        if (consonantMatch && doubleConsonantMatch) {
            
            englishWord = handleDoubleConsonants(englishWord);
            
            console.log("englishWord after checking double consonants: " + englishWord);
            
        }
        
        if (checkCapitalization == true) {
            
            englishWord = recapitalize(englishWord);
            
            console.log("englishWord after recapitalizing: " + englishWord);
        }
        
        console.log("Before check punctuation function");
        
        if (checkPunctuation(englishWord) == true) {
            
            console.log("has punctuation!");
            
        }
        
        console.log("englishWord right before adding to englishString array: " + englishWord);
        
        englishString += englishWord + " ";
        
    }
    
}