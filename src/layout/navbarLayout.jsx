import { NavbarInfo } from "../layoutStyles/navbarLayoutStyle"
import { NavLink } from "react-router-dom"
import { StyledNavLink } from "../layoutStyles/navbarLayoutStyle"

function Navbar() {
    return(
        <NavbarInfo> 
        <div> <StyledNavLink to="/about"> About </StyledNavLink> </div>
        <div> <StyledNavLink exact to="/">Home</StyledNavLink>  </div>
        <div><StyledNavLink to="/Conversation">conversation</StyledNavLink> </div>
        
        </NavbarInfo>
    )
}

export default Navbar