const googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE_API_KEY);

module.exports = {
    translate: async (words, lang) =>{
        if (lang === "en") {
            let list = []
            words.map(word => {
                list.push({
                    original: word,
                    translated: word
                })
            })
            return list
        }
        let list = [];
        for(let i = 0; i < words.length; i++){
            await new Promise((resolve,reject) =>{
                googleTranslate.translate(words[i].Name, 'en', lang, (err, translation) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(translation.translatedText);    
                    list.push({
                        original: words[i].Name,
                        translated: translation.translatedText,
                        instance: words[i].Instances
                    })
                })
            })
            
        }
      
        return list;
    }
}
    