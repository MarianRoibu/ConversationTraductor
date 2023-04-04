import styled, { css } from 'styled-components';

export const TranslationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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