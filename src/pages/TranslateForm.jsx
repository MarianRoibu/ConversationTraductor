import { useState } from 'react';
import { translateText, detectLanguage, handleSpeechToText,handleTextToSpeech } from '../functions/translationFunctions';
import { Input, Form, Label, Select, Button, TranslationInputContainer, TranslatedText, SpeakButton, TextArea, TranslatedTextContainer } from '../styles/TranslateFormStyle';
import Navbar from '../layout/navbarLayout';



function TranslationInput() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [speakActive, setSpeakActive] = useState(false);
  const [isSourceToTarget, setIsSourceToTarget] = useState(true); // added state variable to toggle language direction


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


  const handleSwitchLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };


  return (
  
    <TranslationInputContainer>
        <Navbar />
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
        <Button type="button" onClick={handleSwitchLanguages}>
          Switch Languages
        </Button>
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
      <h2>Translated Text:</h2>
      <Label>
        
      <TextArea
      value={translatedText}
      disabled // add the disabled attribute to make the text area read-only
      onChange={(event) => setTranslatedText(event.target.value)}
    />
      </Label>
      <Button type="button" onClick={handleTextToSpeech} >
       Hear
      </Button>
    </TranslationInputContainer>
   
  );
}

export default TranslationInput;



