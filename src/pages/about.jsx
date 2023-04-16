import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/navbarLayout';
import Spline from '@splinetool/react-spline';

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

function About() {
  return (
    
    <>
      <Navbar />
    <Wraper>
         <Spline class='spline' scene="https://prod.spline.design/Z20wleNby4QiwqWh/scene.splinecode" />

      
      <Container>
        <SectionTitle>Personal Information:</SectionTitle>
        <TextWraper>
        <Text>
        Full Name: Marian Roibu<br/>
        Email: marianroibu32@gmail.com<br/>
        Phone:642621445<br/>
        </Text>
        </TextWraper>
        <SectionTitle>About Me</SectionTitle>
        <TextWraper>
        <Text>
        I am a highly motivated and passionate full stack developer with experience in HTML, CSS, JavaScript, Node.js, PHP, MySQL, React, and Angular. I am a quick learner and excited to apply my skills to solve problems and face new challenges. I have great adaptability and work well both in a team and solo.        
        </Text>
        </TextWraper>
        <Subtitle>Work Experience</Subtitle>
        <TextWraper>
        <Text>
        Assembler Institute of Technology (2022-2023)
Full Stack Developer

Collaborated on various team projects, using technologies such as React, Node.js, MySQL, HTML, CSS, and JavaScript to develop scalable and easy-to-maintain web applications.
Worked on the design and development of an e-commerce application from scratch, including product integration and implementation. Made the design of user interface and user experience (UI/UX).
Collaborated on the development of a web application for posting like Twitter, using PHP, MySQL, and CSS. Contributed to the design, functionality, and implementation of the database.
Worked in the creation of a music streaming and uploading application, using technologies such as JavaScript, React, MongoDB, and Redux. Participated in the design of the user interface and user experience (UI/UX), as well as in the development of the backend.
Participated in daily meetings with the team to discuss project progress and development. Also contributed to problem-solving and error resolution in the code.
Acquired experience in web application development and teamwork, as well as in problem-solving and learning new technologies in an agile environment.
Learned and developed skills in the use of Git and GitHub, and participated in code review and version control.
Participated in programming a RESTful API using Node.js and Express, which allowed me to gain knowledge of software design patterns and architecture.
Performed integration testing and code debugging to ensure the quality of the developed applications.       
 </Text>
 </TextWraper>
        <Subtitle>Skills</Subtitle>
        <TextWraper>
        <Text>
        HTML <br/>
        CSS<br/>
        JavaScript<br/>
        PHP<br/>
        MySQL<br/>
        Node.js<br/>
        React<br/>
        </Text>
        </TextWraper>
        <Subtitle>Education:</Subtitle>
        <TextWraper>
        <Text>Assembler Institute of Technology (2022-2023) - Full Stack Programming Certification

Notable Projects:

Developed an e-commerce web application from scratch, using React, CSS, and Styled Components, as part of my final project in the academy. I was responsible for the entire development process, from product integration to database implementation and user interface creation.

Developed a posting application like Twitter in conjunction with a team of three more programmers, using MySQL, PHP, and CSS, as part of a project in the academy. We were responsible for the design, functionality, and implementation of the database, working together collaboratively.

Developed an application that allows music streaming and uploading, using JavaScript, Styled Components, React, Redux, and MongoDB in conjunction with a team of three more developers, as part of another project in the academy. We focused on making the design modern and user-friendly, working together throughout the entire development process.
</Text>
</TextWraper>
      <Subtitle>Professional Objectives:</Subtitle>
      <TextWraper>
      <Text>
      My long-term goal is to become a senior full stack developer and work on challenging projects that allow me to continue learning and growing in my career. I would like to work in a collaborative environment where I can share my knowledge and learn from other experienced developers. I am looking for an employment opportunity where I can apply my skills and continue to develop as a professional.

I sincerely appreciate your time in reviewing my resume and hope you have found a good sample of my experience and skills. If you have any questions or would like to discuss more about my profile, please do not hesitate to contact me by email or phone. I will be delighted to speak with you and discuss how I could bring value to your team.

I am looking for opportunities to continue growing as a full stack developer and contribute to challenging projects that allow me to continue learning. My commitment to quality and innovation drives me to always give my best and exceed expectations.

My approach is based on problem-solving and effective collaboration, working with passion and creativity to achieve the best results. I am always willing to learn and explore new technologies to improve my work and help my team achieve their goals.
      </Text>
      </TextWraper>
      </Container>
    </Wraper>
    </>
  );
}

export default About;