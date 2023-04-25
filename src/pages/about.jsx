import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/navbarLayout';
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
 
`;


const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  margin-bottom: 1rem;
  top: 0;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 1rem;
  top: 5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  position: relative;
  display: flex;
  flex-direction: row;

`;

const Wraper = styled.div`
  color: white;
  position: relative;
  margin-top: 5rem;
  height: 250rem;
  .spline{
    position: fixed;
    margin: 0;
    top: 0;
    right: 0;
  z-index: 0;
  }
`
const TextWraper = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: row;
top: 5rem;
margin-top: 5rem;
margin-bottom: 5rem;
`

const TextSquare = styled.div`
  position: fixed;
  bottom: 60%;
  left: 40%;
  border-radius: 1rem;
  background-color: rgba(167, 167, 167, 0.8);
  color: white;
  width: 25rem;
  height: 11rem;
  padding: 10px;
  font-size: 1.2rem;
  z-index: 2;
`;

const Triangle = styled.div`
  position: fixed;
  bottom: 57%;
  left: 50%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 20px 15px;
  border-color: transparent transparent white transparent;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 1s ease-in-out infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, -10px);
    }
  }
`;

const Message = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 8px;
  text-align: center;
z-index: 2;
  p {
    margin-bottom: 8px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

function About() {

  const texts = [
    "Hello, and welcome to my world!",
    "Let me tell you a bit about myself.",
    "I am a highly motivated and passionate full stack developer with experience in HTML, CSS, JavaScript, Node.js, PHP, MySQL, React, and Angular. I am a quick learner with great adaptability and work well both in a team and independently.",
    "My work experience includes collaborating on various team projects, developing scalable and easy-to-maintain web applications, and contributing to the design and development of applications from scratch.",
    "I have also gained experience in daily meetings, problem-solving, and error resolution, as well as web application development and teamwork.",
    "Some notable projects I've worked on include developing an e-commerce web application from scratch, developing a Twitter-like posting application as part of a team, and developing an application that allows for music streaming and uploading.",
    "My professional objectives are to become a senior full stack developer and work on challenging projects that allow me to continue learning and growing in my career.",
    "I am currently seeking employment opportunities where I can apply my skills and continue to develop as a professional. I am committed to quality and innovation, and I work with passion and creativity to achieve the best results.",
    "Thank you so much for taking the time to read through it all. I really appreciate your attention and hope that you found this informative and helpful. If you have any questions or feedback, please don't hesitate to reach out to me. Thanks again, and have a great day!"
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 74) { // left arrow
        setTextIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
      } else if (event.keyCode === 76) { // right arrow
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      
    };
  }, []);

  const currentText = texts[textIndex];

  const [showMessage, setShowMessage] = useState(true); 

  const handleKeyDown = () => {
    setShowMessage(false);
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showMessage && (
        <Message>
          <p>Controls:</p>
          <ul>
            <li>W, S, A, D: Move character</li>
            <li>Arrow keys: Move scenery</li>
            <li>J, L: Move text</li>
            <li>Space: Jump</li>
          </ul>
        </Message>
      )}
      <Navbar />
      <Wraper>
        <TextSquare>{currentText}</TextSquare>
        <Triangle />
        <Spline class="spline" scene="https://prod.spline.design/Z20wleNby4QiwqWh/scene.splinecode" />
      </Wraper>
    </>
  );
}

export default About;