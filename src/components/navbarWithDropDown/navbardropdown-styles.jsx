import tw from "twin.macro";
import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HamburgerIcon = tw.button`
rounded-lg 
ml-6
focus:outline-none focus:shadow-outline
lg:hidden 
`;

export const HeaderNavbarContainer = styled.header`
    ${tw`
w-full relative
p-4
bg-primary-500
bg-gradient-to-bl from-primary-200 
text-lg text-gray-700 
`}

    ${HamburgerIcon}.closed {
        ${tw`text-gray-100 hover:text-gray-500`}
    }
    ${HamburgerIcon}.open {
        ${tw`text-white hover:text-gray-500`}
    }
`;

export const NavbarContainer = tw.div`
flex justify-between items-center 
w-full
`;

export const AuthandToggleContainer = tw.div`
flex flex-row items-center justify-between inline-flex

`;

export const Logo = tw(Link)`
text-2xl! text-gray-100 
 ml-0!
 font-black
 tracking-wider rounded-lg 
hover:border-gray-300 hover:text-gray-300
focus:outline-none focus:shadow-outline`;


export const DropDownLinkContainer = tw.div`
bg-white shadow-lg
flex flex-col justify-center items-center
rounded-lg
p-4 my-6 mx-auto
h-2/4 w-3/4
lg:hidden

`;

export const DesktopLinksContainer = tw.div`

pb-4 
hidden
md:pb-0 lg:flex  md:flex-row

`;

export const NavLink = tw(Link)`
  text-lg text-gray-100
  font-semibold tracking-wide transition duration-300
  cursor-pointer
  border-b-2 border-transparent 
  hover:border-gray-300 hover:text-gray-300
  lg:mx-6 lg:my-0
`;

export const DropDownNavLink = tw(Link)`
flex justify-center items-center
px-4 py-2 mt-2 mb-4
bg-green-200
text-lg
font-semibold 
w-1/2
bg-transparent rounded-lg 
md:mt-0 md:ml-4 
hover:text-white hover:bg-primary-100
focus:outline-none focus:shadow-outline
`;

// focus:text-gray-900 focus:bg-gray-200

export const AuthLink = tw(Link)`
  text-lg
  px-8 py-3 rounded bg-primary-500 text-gray-100
  font-semibold tracking-wide transition duration-300
  border-b-0 border-transparent
  cursor-pointer 
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
`;
