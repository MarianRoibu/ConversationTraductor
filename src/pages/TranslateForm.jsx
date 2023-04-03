import { useState } from 'react';
import { translateText, detectLanguage } from '../functions/translationFunctions';

function TranslationInput() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('');
  const [targetLang, setTargetLang] = useState('es');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSourceLangChange = (event) => {
    setSourceLang(event.target.value);
  };

  const handleTargetLangChange = (event) => {
    setTargetLang(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apiKey = 'afb08084-f865-93bd-398d-35465d9a2ad7:fx';
    const { translatedText, detectedSourceLang } = await translateText(apiKey, sourceLang, targetLang, inputText);
    setTranslatedText(translatedText);
    setSourceLang(detectedSourceLang);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter text to translate:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <label>
          Source Language:
          <select value={sourceLang} onChange={handleSourceLangChange}>
            <option value="auto">Detect Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
          </select>
        </label>
        <label>
          Target Language:
          <select value={targetLang} onChange={handleTargetLangChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ro">Roumanian</option>
          </select>
        </label>
        <button type="submit">Translate</button>
      </form>
      {translatedText && <div>Translated text: {translatedText}</div>}
    </div>
  );
}

export default TranslationInput;



