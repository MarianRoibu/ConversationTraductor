import Navbar from "../layout/navbarLayout";
import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Wraper = styled.div`
  color: white;
  position: relative;
  height: 100vh;
  .spline{
    position: absolute;
   
    margin-top: 0rem;
    top: 0;
    right: 0;
  z-index: 0;
  }
`

const ButtonsContainer = styled.div`
  position: relative;
  width: 0px;
  height: 0px;
  background-color: transparent;
  
`;


const LaptopScreenButton = styled.button`
  margin: 10px;
  padding: 5px;
  width: 10rem;
  height: 3rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0;
  transform: rotate(5deg);
  top: 12%;
  left: 27rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #eee;

`;


const LaptopScreenButton1 = styled.button`
  margin: 10px;
  padding: 5px;
  width: 17rem;
  height: 35rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0;
  transform: rotate(0deg);
  top: 12%;
  left: 25rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #eee;
`;


const LaptopScreenButton2 = styled.button`
  margin: 10px;
  padding: 5px;
  width: 15rem;
  height: 17rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0;
  transform: rotate(0deg);
  top: 12%;
  left: 27rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #eee;
`;


const ButtonWraper = styled.div`
    position: relative;
width: 100%;
display: flex;
flex-direction: column;
top: 20rem;
/* margin-top: 5rem; */
margin-bottom: 6rem;
`

const ButtonWraper1 = styled.div`
    position: relative;
width: 100%;
display: flex;
flex-direction: column;
left: 45rem;
top: 15rem;
/* margin-top: 5rem; */
margin-bottom: 6rem;
`


const ButtonWraper2 = styled.div`
    position: relative;
width: 100%;
display: flex;
flex-direction: column;
top: 2rem;
/* margin-top: 5rem; */
margin-bottom: 6rem;
`



 function MenuMainPage() {
    const [showButtons, setShowButtons] = useState(false);
    const [showElement, setShowElement] = useState(false);


    const handleButtonClick = () => {
      setShowButtons(true);
    };

    return(

        <Wraper>
    {/* <div> */}
  

      {showButtons && (
        <ButtonsContainer>
          <ButtonWraper1>
          <NavLink to="/about"> <LaptopScreenButton1>Botón 1</LaptopScreenButton1> </NavLink>
          </ButtonWraper1>
          <ButtonWraper2>
          <NavLink to="/TranslateForm"> <LaptopScreenButton2>Botón 2</LaptopScreenButton2> </NavLink>
          </ButtonWraper2>
          <ButtonWraper>
          <NavLink to="/Conversation"> <LaptopScreenButton>Botón 3</LaptopScreenButton> </NavLink>
          </ButtonWraper>
        </ButtonsContainer>
      )}
    {/* </div> */}
    <Spline onClick={handleButtonClick} scene="https://prod.spline.design/67byttTb9exIse85/scene.splinecode" />


        </Wraper>
    )

}

export default MenuMainPage;