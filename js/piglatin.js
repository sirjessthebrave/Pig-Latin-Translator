var regularExpressions = {
    vowelRule: /[aeiou]/i,
    consonantsRule: /[bcdfghjklmnpqrstvwxyz]/i,
    punctuationRule: /\W/g,
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

function startTranslation() {
    
    var englishText = getEnglish();
    
    var englishArray = splitIntoArray(englishText);
    
    outputPigLatin(englishArray);
    
}

function outputPigLatin(englishArray) {
    
    var pigLatinArray = convertEnglishToPigLatin(englishArray);
    
    var outputArea = document.getElementById("textOutput");
    
    outputArea.innerHTML = pigLatinArray;
    
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
    var capitalMatch = regularExpressions.capitalizationRule.exec(firstLetter);
        
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
    var punctuationMatch = regularExpressions.punctuationRule.exec(word);
    
    if (punctuationMatch) {
        
        hasPunctuation = true;
        
    }
    
    else {
        
        hasPunctuation = false;
        
    }
    
    return hasPunctuation;
    
}

function removePunctuation(word) {

    var punctuationMatch = regularExpressions.punctuationRule.exec(word);
    
    var newWord = word.replace(punctuationMatch, "");
    
    return newWord;

}

function convertEnglishToPigLatin(englishArray) {
    
    var englishWord;
    var pigLatinArray = [];
    
    for (var i = 0; i < englishArray.length; i++) {
        
        englishWord = englishArray[i];
        
        var firstLetter = englishWord.charAt(0);
        var secondLetter = englishWord.charAt(1);
        
        var vowelMatch = regularExpressions.vowelRule.exec(firstLetter);
        var consonantMatch = regularExpressions.consonantsRule.exec(firstLetter);
        var doubleConsonantMatch = regularExpressions.consonantsRule.exec(secondLetter);
        
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
        
        pigLatinArray += englishWord + " ";
        
    }
    
    return pigLatinArray;
    
}