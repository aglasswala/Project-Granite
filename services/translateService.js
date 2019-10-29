const googleTranslate = require('google-translate')("AIzaSyDQZ7YH4cMlmzucOIASfsbqL-Rjw4lQvLA");

module.exports = {
    translate: (word) =>{
        
        return new Promise((resolve, reject) => {
            googleTranslate.translate(word, 'en', 'de', (err, translation) => {
                if(err){
                    reject(err);
                }
                return resolve(translation.translatedText);
            })
        });
            
            
    }
}
    




