import { useState } from 'react';
import { translateText, detectLanguage } from '../functions/translationFunctions';
import speak from 'speak-tts';

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
      const { translatedText } = await translateText(apiKey, sourceLang, targetLang, inputText);
      setTranslatedText(translatedText);
    };
  
    const handleSpeechToText = () => {
        const recognition = new window.webkitSpeechRecognition();
        const langCode = sourceLang === 'auto' ? '' : sourceLang;
      
        recognition.onresult = (event) => {
          setInputText(event.results[0][0].transcript);
        };
      
        recognition.lang = langCode;
        recognition.start();
      };

      const handleTextToSpeech = () => {
        const utterance = new SpeechSynthesisUtterance(translatedText);
        utterance.lang = targetLang;
        utterance.pitch = 1;
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
      };
  
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Enter text to translate:
            <input type="text" value={inputText} onChange={handleInputChange} />
          </label>
          <label>
            Select source language:
            <select value={sourceLang} onChange={handleSourceLangChange}>
              <option value="auto">Detect language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="ja">Japanese</option>
            </select>
          </label>
          <label>
            Select target language:
            <select value={targetLang} onChange={handleTargetLangChange}>
              <option value="es">Spanish</option>
              <option value="en">English</option>
              <option value="ja">Japanese</option>
            </select>
          </label>
          <button type="submit">Translate</button>
          <button type="button" onClick={handleSpeechToText}>Speak</button>
        </form>
        {translatedText && <div>Translated text: {translatedText}</div>}
        <button type="button" onClick={handleTextToSpeech}>Speak translation</button>
      </div>
    );
  }
  
  export default TranslationInput;



