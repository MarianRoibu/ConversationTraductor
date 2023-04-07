import { useState } from 'react';
import { translateText, detectLanguage, handleSpeechToText,handleTextToSpeech } from '../functions/translationFunctions';
import { Input, Form, Label, Select, Button, TranslationInputContainer, SpeakButton } from '../styles/TranslateFormStyle';
import ThemeToggleButton from '../components/darkModeButton';
import { createGlobalStyle } from 'styled-components';


function TranslationInput() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [speakActive, setSpeakActive] = useState(false);

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
    let detectedSourceLang = sourceLang;
  
    if (sourceLang === 'auto') {
      detectedSourceLang = await detectLanguage(apiKey, inputText);
      setSourceLang(detectedSourceLang);
    }
  
    const { translatedText } = await translateText(apiKey, detectedSourceLang, targetLang, inputText);
    setTranslatedText(translatedText);
  };

  const recognition = new window.webkitSpeechRecognition();


  const handleSpeechToText = (speakActive, setSpeakActive) => {
    if (speakActive) {
      // Stop speech recognition
      recognition.stop();
      setSpeakActive(false);
    } else {
      // Start speech recognition
      const recognition = new window.webkitSpeechRecognition();
      const langCode = sourceLang === 'auto' ? '' : sourceLang;
    
      recognition.onresult = (event) => {
        setInputText(event.results[0][0].transcript);
      };
    
      recognition.onend = () => {
        setSpeakActive(false);
      };
    
      recognition.onerror = () => {
        setSpeakActive(false);
      };
    
      recognition.lang = langCode;
      recognition.start();
      setSpeakActive(true);
    }
  };

  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = targetLang;
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };


  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    font-family: sans-serif;
  }
`;
const [currentTheme, setCurrentTheme] = useState('light');

const toggleTheme = () => {
  setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
};



  return (
  
    <TranslationInputContainer>
      <Form onSubmit={handleFormSubmit}>
        <Label>
          Enter text to translate:
          <Input type="text" value={inputText} onChange={handleInputChange} />
        </Label>
        <Label>
          Select source language:
          <Select value={sourceLang} onChange={handleSourceLangChange}>
          <option value="auto">Detect language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>

          </Select>
        </Label>
        <Label>
          Select target language:
          <Select value={targetLang} onChange={handleTargetLangChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
       

          </Select>
        </Label>
        <Button type="submit" primary>Translate</Button>

        <SpeakButton active={speakActive} onClick={() => handleSpeechToText(speakActive, setSpeakActive)}>
  {speakActive ? "Speak (On)" : "Speak (Off)"}
</SpeakButton>

      </Form>
      {translatedText && <div>Translated text: {translatedText}</div>}
      <Button type="button" onClick={handleTextToSpeech} >
       Hear
      </Button>
    </TranslationInputContainer>
   
  );
}

export default TranslationInput;



