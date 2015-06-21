describe("First Letter Tests", function() {
    
    describe("First letter is a vowel", function() {
        
        it("Should have -way added to the word", function() {
      
            expect(handleVowels("eggs")).toEqual("eggsway");
        
        });
        
    });
    
    describe("First letter is a consonant", function() {
        
        it("Should move first letter to the end and add -ay to the word", function() {
            
            expect(handleConsonants("bacon")).toEqual("aconbay");
            
        });
        
    });
    
    
    describe("First two letters are consonants", function() {
        
        it("Should move first two letters to the end then add -ay", function() {
            
            expect(handleDoubleConsonants("trash")).toEqual("ashtray");
            
        });
        
    });

});

describe("Capitalization tests", function() {
   
   describe("First letter is a capital letter", function(){
       
       it("Should recapitalize the word", function() {
          
            expect(recapitalize("Toast")).toEqual("Toast");
           
       });
       
   });
   
   describe("Check for if the word is capitalized", function(){
       
       it("Should return true if the first letter of the word is capitalized", function(){
          
            expect(checkCapitalization("Toast")).toEqual(true);
           
       });
       
        it("Should return false if the first letter of the word is not capitalized", function(){
          
            expect(checkCapitalization("toast")).toEqual(false);
           
       });
       
   });
    
});

describe("Punctuation tests", function(){
    
    describe("Check if there is punctuation in the word", function(){
       
       it("Should return true if the word contains punctuation", function(){
          
            expect(checkPunctuation("don't")).toEqual(true); 
           
       });
       
        it("Should return false if the word does not contain punctuation", function(){
          
            expect(checkPunctuation("hello")).toEqual(false); 
           
       });
        
    });
    
    describe("Remove punctuation from the word", function(){
       
       it("Should remove any punctuation marks from the word", function(){
           
            expect(removePunctuation("don't")).toEqual("dont");
           
       });
       
       it("Should re-add allowed punctuation marks", function(){
          
            expect(removePunctuation("hey,")).toEqual("hey,");
           
       });
        
    });
    
});


describe("Translation tests", function(){
    
    describe("Convert a whole sentence to Pig Latin", function(){
        
        it("Should add appropriate ending based on first letter plus handle punctuation and capitalization", function(){
            
            var array = ["Hey,","what's","up?"];
            
            expect(convertEnglishToPigLatin(array)).toEqual("Eyhay, atswhay upway? ");
            
        });
        
    });
    
});