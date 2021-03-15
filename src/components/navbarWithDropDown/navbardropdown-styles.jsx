import tw from "twin.macro";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import
// Header,
{
    // NavLink,
    // NavLinks,
    // PrimaryLink,
    // LogoLink,
    // NavToggle,
    // DesktopNavLinks
} from '../../treeponents/headers/light.js'

import { motion } from "framer-motion";

// ****************************************************************
// From OG Navbar
// ****************************************************************



export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;
export const NavLink = tw(Link)`
text-lg my-2 
cursor-pointer
font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
lg:text-sm lg:mx-6 lg:my-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`
  flex items-center  
  ml-0!
  text-gray-100
  text-2xl! 
  border-b-0 
  `};
`;

export const NavToggle = motion.custom(tw.button`
  lg:hidden z-50 focus:outline-none hocus:text-primary-500 transition duration-300
`);

export const Header = tw.header`
  flex justify-between items-center 
  h-20
  mx-auto 
  `;
export const StyledHeader = styled(Header)`
  
  ${tw`
  p-5 bg-primary-500
  bg-gradient-to-bl from-primary-200 
  `}
  
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
      ${tw`
      text-lg text-gray-100 
      hover:border-gray-300 hover:text-gray-300
      `}
    }

  ${NavToggle}.closed {
      ${tw`
      text-gray-100 
      hover:text-primary-500`}
    }

`;



export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
* hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
*/



// export const NavLink2 = styled(Link)`
//  ${tw` text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
//   font-semibold tracking-wide transition duration-300
//   pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`};

// `;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;


export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;



export const MobileNavLinks = motion.custom(styled.div`
  ${tw` p-4
        fixed top-0  inset-x-0 
        text-gray-900 text-center 
        bg-white
        lg:hidden z-30 
        border rounded-lg`}
        /* fixed top-0 inset-x-0   */
        
  ${NavLinks} {
    ${tw` flex flex-col items-center
          my-8 
          
        `
    }
  }
`);

// ****************************************************************

export const NavbarContainer = tw.header`
w-full relative
p-4
bg-primary-100  bg-gradient-to-bl from-primary-200 
text-gray-700 
`;

export const NavbarContainer2 = tw.div`
flex flex-col 
px-4 mx-auto
max-w-screen-xl  
md:items-center md:justify-between md:flex-row md:px-6 
lg:px-8
`;

export const LogoContainer = tw.div`
flex flex-row items-center justify-between
p-4 
`;

export const Logo = tw.a`text-lg text-gray-900 uppercase font-semibold 
tracking-widest rounded-lg 
focus:outline-none focus:shadow-outline`;


export const HamburgerIcon = tw.button`
rounded-lg focus:outline-none focus:shadow-outline

md:hidden 
`;

export const DropDownLinkContainer = tw.div`
bg-white shadow-lg
flex flex-col justify-center items-center
rounded-lg
p-4 mx-auto
h-2/4 w-3/4
md:hidden 
`;


export const NavlinksContainer = tw.nav`
flex-col flex-grow 
pb-4 
md:pb-0 hidden md:flex md:justify-end md:flex-row
`;