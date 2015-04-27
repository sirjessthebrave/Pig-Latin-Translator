var outputArea = document.getElementById("textOutput");
var textBox, englishText, englishArray;
var englishString = "";

var vowelRule = /[aeiou]/i;
var consonantsRule = /[bcdfghjklmnpqrstvwxyz]/i;
var punctuationRule = /.?/i;

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

function convertEnglishToPigLatin() {
    
    var englishWord;
    var firstLetter;
    
    for (i = 0; i < englishArray.length; i++) {
        
        englishWord = englishArray[i];
        
        firstLetter = englishWord.charAt(0);
        secondLetter = englishWord.charAt(1);
        
        var vowelMatch = vowelRule.exec(firstLetter);
        var consonantMatch = consonantsRule.exec(firstLetter);
        var doubleConsonantMatch = consonantsRule.exec(secondLetter);
        
        var wordLength = englishWord.length;
        var lastLetterNumber = wordLength - 1;
        var lastLetter = englishWord.charAt(lastLetterNumber);
        
        // Add "way" to the end of the word if it starts with a vowel
        
        if (vowelMatch) {
            
            englishWord += "way";
            
            englishString += englishWord + " ";
            
        }
        
        if (consonantMatch && doubleConsonantMatch) {
            
            // remove the first two letters
            englishWord = englishWord.substring(2,wordLength);
            
            englishWord += firstLetter + secondLetter + "ay";
            
            englishString += englishWord + " ";
            
        }
        
        if (consonantMatch && !doubleConsonantMatch) {
            
            // remove the first letter
            englishWord = englishWord.substring(1,wordLength);
            
            englishWord += firstLetter + "ay";
            
            englishString += englishWord + " ";
            
        }
        
    }
    
}