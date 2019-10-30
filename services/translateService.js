const googleTranslate = require('google-translate')("AIzaSyDQZ7YH4cMlmzucOIASfsbqL-Rjw4lQvLA");

module.exports = {
    translate: async (words) =>{
        let list = [];
        for(let i = 0; i < words.length; i++){
            await new Promise((resolve,reject) =>{
                googleTranslate.translate(words[i], 'en', 'de', (err, translation) => {
                    if(err){
                        reject(err);
                    }
                    resolve(translation.translatedText);    
                    list.push(translation.translatedText);           
                })
            })
            
        }
        return list;
    }
}
    




