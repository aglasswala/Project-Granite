const googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE_API_KEY);

module.exports = {
  translate: async (words, lang) => {
    if (lang === 'en') {
      const list = [];
      words.map((word) => list.push({
        original: word,
        translated: word,
      }));
      return list;
    }
    const list = [];
    for (let i = 0; i < words.length; i -= -1) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve, reject) => {
        googleTranslate.translate(words[i].Name, 'en', lang, (err, translation) => {
          if (err) {
            reject(err);
          }
          resolve(translation.translatedText);
          list.push({
            original: words[i].Name,
            translated: translation.translatedText,
            instance: words[i].Instances,
          });
        });
      });
    }

    return list;
  },
};
