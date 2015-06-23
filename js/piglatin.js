"use strict";

var regularExpressions = {
    vowelRule: /[aeiou]/i,
    consonantsRule: /[bcdfghjklmnpqrstvwxyz]/i,
    punctuationRule: /[.!,?'\\-]/,
    capitalizationRule: /[A-Z]/
};

function getEnglish() {
    
    var textBox = document.getElementById("English");
    var englishText = textBox.value;
    
    return englishText;
    
}

function splitIntoArray(inputText) {

     var outputText = inputText.split(" ");
     
     return outputText;
    
}

function outputPigLatin(englishArray) {
    
    var pigLatinArray = convertEnglishToPigLatin(englishArray);
    
    var outputArea = document.getElementById("textOutput");
    
    outputArea.innerHTML = pigLatinArray;
    
}

function handleVowels(word) {
           
    word += "way";
       
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
    var capitalMatch = regularExpressions.capitalizationRule.test(firstLetter);
        
    if (capitalMatch) {
            
        recapitalize = true;
        
    } else {
            
        recapitalize = false;
            
    }
    
    return recapitalize;
    
}

function checkPunctuation(word) {
    
    var hasPunctuation;
    var punctuationMatch = regularExpressions.punctuationRule.test(word);
    
    if (punctuationMatch) {
        
        hasPunctuation = true;
        
    } else {
        
        hasPunctuation = false;
        
    }
    
    return hasPunctuation;
    
}

function removePunctuation(englishWord) {
    
    var punctuationMatch = regularExpressions.punctuationRule.exec(englishWord);
    
    var newWord = englishWord.replace(punctuationMatch, "");
    
    if(punctuationMatch == "?" || punctuationMatch == "!" || punctuationMatch == "." || punctuationMatch == ",") {
        
        newWord = newWord + punctuationMatch;
        
    }
    
    return newWord;

}

function handleWords(word) {
    
    var firstLetter = word.charAt(0);
    var secondLetter = word.charAt(1);

    var vowelMatch = regularExpressions.vowelRule.test(firstLetter);
    var consonantMatch = regularExpressions.consonantsRule.test(firstLetter);
    var doubleConsonantMatch = regularExpressions.consonantsRule.test(secondLetter);
 
    if (vowelMatch) {
            
        word = handleVowels(word);
            
    }
        
    if (consonantMatch && !doubleConsonantMatch) {
            
        word = handleConsonants(word);
            
    }
        
    if (consonantMatch && doubleConsonantMatch) {
            
        word = handleDoubleConsonants(word);
            
    }
    
    return word;
    
}

function convertEnglishToPigLatin(englishArray) {
    
    var pigLatinArray = [];
    
    for (var i = 0; i < englishArray.length; i++) {
        
        var englishWord = englishArray[i];
        
        var isCapitalized = checkCapitalization(englishWord);
        var hasPunctuation = checkPunctuation(englishWord);
        
        englishWord = handleWords(englishWord);
        
        if (isCapitalized === true) {
            
            englishWord = recapitalize(englishWord);

        }
        
        if (hasPunctuation === true) {
            
            englishWord = removePunctuation(englishWord);
        }
        
        pigLatinArray += englishWord + " ";
        
    }
    
    return pigLatinArray;
    
}

function startTranslation() {
    
    var englishText = getEnglish();
    
    var englishArray = splitIntoArray(englishText);
    
    outputPigLatin(englishArray);
    
}