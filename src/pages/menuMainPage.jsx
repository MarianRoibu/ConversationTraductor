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

const ButtonWraper = styled.div`
    position: relative;
width: 100%;
display: flex;
flex-direction: column;
top: 12rem;
/* margin-top: 5rem; */
margin-bottom: 6rem;
`



 function MenuMainPage() {
    const [showButtons, setShowButtons] = useState(false);

    const handleButtonClick = () => {
      setShowButtons(true);
    };

    return(

        <Wraper>
    {/* <div> */}
      {/* <LaptopButton onClick={handleButtonClick}>Mostrar botones</LaptopButton> */}
      {showButtons && (
        <ButtonsContainer>
          <ButtonWraper>
          <NavLink to="/about"> <LaptopScreenButton>Botón 1</LaptopScreenButton> </NavLink>
          </ButtonWraper>
          <ButtonWraper>
          <NavLink to="/TranslateForm"> <LaptopScreenButton>Botón 2</LaptopScreenButton> </NavLink>
          </ButtonWraper>
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