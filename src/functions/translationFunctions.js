import axios from 'axios';

export const translateText = async (apiKey, sourceLang, targetLang, text) => {
    const response = await axios.post(
      `https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&source_lang=${sourceLang}&target_lang=${targetLang}&text=${text}`
    );
    return {
      translatedText: response.data.translations[0].text,
      detectedSourceLang: response.data.translations[0].detected_source_language,
    };
  };

export const detectLanguage = async (apiKey, text) => {
  const response = await axios.post(
    `https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${text}`
  );
  return response.data.translations[0].detected_source_language;
};
