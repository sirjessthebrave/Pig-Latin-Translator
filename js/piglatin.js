var outputArea = document.getElementById("textOutput");
var englishArray;
var englishString = "";

var vowelRule = /[aeiou]/i;
var consonantsRule = /[bcdfghjklmnpqrstvwxyz]/i;
var punctuationRule = /\W/g;
var capitalizationRule = /[A-Z]/;

function getEnglish() {
    
    var textBox = document.getElementById("English");
    var englishText = textBox.value;
    
    return englishText;
    
}

function splitIntoArray(inputText) {

     var outputText = inputText.split(" ");
     
     return outputText;
    
}

function startTranslation() {
    
    var englishText = getEnglish();
    
    englishArray = splitIntoArray(englishText);
    
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
    
    var hasPunctuation;
    var punctuationMatch = punctuationRule.exec(word);
    
    if (punctuationMatch) {
        
        hasPunctuation = true;
        
    }
    
    else {
        
        hasPunctuation = false;
        
    }
    
    return hasPunctuation;
    
}

function removePunctuation(word) {

    var punctuationMatch = punctuationRule.exec(word);
    
    var newWord = word.replace(punctuationMatch, "");
    
    return newWord;

}

function convertEnglishToPigLatin() {
    
    var englishWord;
    
    for (var i = 0; i < englishArray.length; i++) {
        
        englishWord = englishArray[i];
        
        var firstLetter = englishWord.charAt(0);
        var secondLetter = englishWord.charAt(1);
        
        var vowelMatch = vowelRule.exec(firstLetter);
        var consonantMatch = consonantsRule.exec(firstLetter);
        var doubleConsonantMatch = consonantsRule.exec(secondLetter);
        
        checkCapitalization(englishWord);
        
        checkPunctuation(englishWord);
        
        if (vowelMatch) {
            
            englishWord = handleVowels(englishWord);
            
        }
        
        if (consonantMatch && !doubleConsonantMatch) {
            
            englishWord = handleConsonants(englishWord);
            
        }
        
        if (consonantMatch && doubleConsonantMatch) {
            
            englishWord = handleDoubleConsonants(englishWord);
            
        }
        
        if (checkCapitalization == true) {
            
            englishWord = recapitalize(englishWord);

        }
        
        if (checkPunctuation(englishWord) == true) {
            
            removePunctuation(englishWord);
        }
        
        englishString += englishWord + " ";
        
    }
    
}