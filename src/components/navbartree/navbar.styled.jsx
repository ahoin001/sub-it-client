// **** NAV
import tw from "twin.macro";
import styled from "styled-components";

// import Header from './navstyles'
import 
Header, 
{
  NavLink,
  // NavLinks,
  // PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks
} from "../../treeponents/headers/light";

export const StyledHeader = styled(Header)`
  
  ${tw`p-5 bg-primary-100
       bg-gradient-to-bl from-primary-200 
       `}
  
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-lg text-gray-100 hover:border-gray-300 hover:text-gray-300
    `}
  }

  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }

`;