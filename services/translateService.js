const googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE_API_KEY);

module.exports = {
  translate: async (words, lang) => {
    const list = [];
    if (lang === 'en') {
      words.map((word) => list.push({
        original: word,
        translated: word,
      }));
      return list;
    }else{
    for (let i = 0; i < words.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve, reject) => {
        googleTranslate.translate(words[i], 'en', lang, (err, translation) => {
          if (err) {
            reject(err);
          }else{
            resolve(translation.translatedText);
            list.push({
              original: words[i],
              translated: translation.translatedText,
              // instance: words[i].Instances,
            });
          }
        });
      });
    }
    }
    return list 
  },
};
