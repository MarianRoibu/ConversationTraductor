import styled, { css } from 'styled-components';
import  { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: sans-serif;
    background-color: #f2f2f2;
    color: #333;
  }
  
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #111;
      color: #ddd;
    }
  }
`;


export const TranslationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
  padding: 0;
  height: 100vh;
  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`;

export const TranslatedTextContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
background-color: #fff;
width: 100%;
max-width: 500px;

`;

export const TranslatedText = styled.span`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
background-color: #fff;
width: 100%;
max-width: 500px;
`;


export const TextArea = styled.textarea`
width: 25%;
margin-left: 38%;
font-size: 1rem;
padding: 0.5rem;
border: 1px solid #ccc;
border-radius: 0.5rem;
margin-bottom: 1rem;
max-height: 300px;
height: 100px;
@media (prefers-color-scheme: dark) {
  background-color: #787878;
}
overflow-y: auto;
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 500px;
  
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  
`;

export const Input = styled.textarea`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  max-height: 300px;
  height: 100px;
  @media (prefers-color-scheme: dark) {
    background-color: #787878;
  }
  overflow-y: auto;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  
  ${props => props.primary && css`
    background-color: #007bff;
    color: #fff;
  `}
`;

export const SpeakButton = styled.button`
  background-color: ${props => props.active ? 'green' : 'gray'};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;