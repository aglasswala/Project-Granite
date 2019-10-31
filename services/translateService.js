const googleTranslate = require('google-translate')(process.env.TRANSLATE_API);

module.exports = {
    translate: async (words) =>{
        let list = [];
        for(let i = 0; i < words.length; i++){
            await new Promise((resolve,reject) =>{
                googleTranslate.translate(words[i], 'en', 'ca', (err, translation) => {
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
    




