import React, { useState } from 'react';
import tw from "twin.macro";
import { Link } from 'react-router-dom'
// import styled from "styled-components";

import {
    NavLinks,
    //  NavLink,
    PrimaryLink,
    //   LogoLink,
} from '../../treeponents/headers/light.js'

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import {
    StyledHeader,
    DesktopNavLinks,
    // NavLink,
    LogoLink
} from './navbardropdown-styles'

export const HeaderNavbarContainer = tw.header`

w-full relative
p-4

bg-gradient-to-bl from-primary-200 
text-lg text-gray-700 
`;


export const NavbarContainer = tw.div`
flex justify-between items-center 
w-full



`;

export const NavbarElements = tw.article`
flex flex-row items-center justify-between inline-flex

`;

export const Logo = tw.a`
text-2xl! text-gray-100 
 ml-0!
 font-black
tracking-widest rounded-lg 
hover:border-gray-300 hover:text-gray-300
focus:outline-none focus:shadow-outline`;


export const HamburgerIcon = tw.button`
rounded-lg 
ml-6
focus:outline-none focus:shadow-outline
lg:hidden 
`;

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
md:pb-0 hidden md:flex md:justify-end md:flex-row
`;

export const NavLink = tw(Link)`
  text-lg
  my-2 
  pb-1 
  font-semibold tracking-wide transition duration-300
  cursor-pointer
  border-b-2 border-transparent 
  hover:border-primary-500 hocus:text-primary-500
  lg:mx-6 lg:my-0
`;

export const DropDownNavLink = tw.nav`
px-4 py-2 mt-2 bg-green-200
text-sm 
font-semibold 
bg-transparent rounded-lg 
md:mt-0 md:ml-4 
hover:text-gray-900 hover:bg-gray-200
focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
`;


const NavbarDropDown = (props) => {

    const [showDropDown, setshowDropDown] = useState(false)

    const navLinks = [

        <NavLinks key={1}>

            {localStorage.getItem('userId')
                ?

                <React.Fragment>

                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        Home
                    </NavLink>

                    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                        Dashboard
                    </NavLink>

                    <NavLink to="/form" style={{ textDecoration: 'none' }}>
                        Add Project
                    </NavLink>

                </React.Fragment>

                :

                <React.Fragment>

                    {/* <PrimaryLink to="/signup">
                            Sign-Up
                        </PrimaryLink> */}

                </React.Fragment>

            }

        </NavLinks>
        ,

        <NavLinks key={2}>

            {localStorage.getItem('userId')
                ?

                <PrimaryLink to="/"
                // onClick={() => logOut()} 
                >
                    Logout
                </PrimaryLink>

                :

                <React.Fragment>

                    <PrimaryLink to="/login">
                        Login
                    </PrimaryLink>

                </React.Fragment>

            }

        </NavLinks>

    ];

    const navLinksUserAuth = localStorage.getItem('userId')
        ?

        <React.Fragment>

            <NavLink to="/" style={{ textDecoration: 'none' }}>
                Home
        </NavLink>

            <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                Dashboard
        </NavLink>

            <NavLink to="/form" style={{ textDecoration: 'none' }}>
                Add Project
        </NavLink>

        </React.Fragment>

        :

        <React.Fragment>

            {/* <PrimaryLink to="/signup">
                Sign-Up
            </PrimaryLink> */}

        </React.Fragment>



    const userAuthentication = localStorage.getItem('userId')
        ?

        <PrimaryLink to="/"
        // onClick={() => logOut()} 
        >
            Logout
        </PrimaryLink>

        :

        <React.Fragment>

            <PrimaryLink to="/login">
                Login
        </PrimaryLink>

        </React.Fragment>



    return (
        <>
            {/* <StyledHeader> */}

            {/* <DesktopNavLinks>

                    <LogoLink to="/">
                        SubIt
                    </LogoLink>

                    {navLinks}

                </DesktopNavLinks>

                <NavbarElements>
                    <Logo>Flowtrail UI</Logo>

                    <HamburgerIcon
                        onClick={() => setshowDropDown(!showDropDown)}
                    >

                        {showDropDown ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}

                    </HamburgerIcon>
                </NavbarElements> */}

            {/* Dropdown Mobile Links Container  */}
            {/* {showDropDown ? <DropDownLinkContainer>

                    <NavLink href="#">Blog</NavLink>
                    <NavLink onClick={() => setshowDropDown(!showDropDown)} href="#">Portfolio</NavLink>
                    <NavLink onClick={() => setshowDropDown(!showDropDown)} href="#">About</NavLink>
                    <NavLink onClick={() => setshowDropDown(!showDropDown)} href="#">Contact</NavLink>


                </DropDownLinkContainer> : ''} */}

            {/* </StyledHeader> */}
            {/* ------------------------------------------------- */}
            <HeaderNavbarContainer>

                <NavbarContainer>

                    <Logo>SubIt</Logo>

                    {/* Links Displayed on md and larger */}
                    <DesktopLinksContainer>

                        {navLinksUserAuth}

                    </DesktopLinksContainer>

                    <NavbarElements>

                        {userAuthentication}

                        <HamburgerIcon
                            onClick={() => setshowDropDown(!showDropDown)}
                        >

                            {showDropDown ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}

                        </HamburgerIcon>



                    </NavbarElements>



                </NavbarContainer>


                {/* Dropdown Mobile Links Container  */}
                {showDropDown ? <DropDownLinkContainer>

                    <DropDownNavLink href="#">Blog</DropDownNavLink>
                    <DropDownNavLink onClick={() => setshowDropDown(!showDropDown)} href="#">Portfolio</DropDownNavLink>
                    <DropDownNavLink onClick={() => setshowDropDown(!showDropDown)} href="#">About</DropDownNavLink>
                    <DropDownNavLink onClick={() => setshowDropDown(!showDropDown)} href="#">Contact</DropDownNavLink>

                </DropDownLinkContainer> : ''}

            </HeaderNavbarContainer>
        </>

    );
};

export default NavbarDropDown;




//  <NavbarContainer>

//                 <NavbarContainer2>

//                     <NavbarElements>
//                         <Logo>Flowtrail UI</Logo>

//                         <HamburgerIcon
//                             onClick={() => setshowDropDown(!showDropDown)}
//                         >

//                             {showDropDown ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}

//                         </HamburgerIcon>
//                     </NavbarElements>

//                     {/* Links Displayed on md and larger */}
//                     <NavlinksContainer>

//                         {navLinks}

//                     </NavlinksContainer>

//                 </NavbarContainer2>

//                 {/* Dropdown Mobile Links Container  */}
//                 {showDropDown ? <DropDownLinkContainer>

//                     {/* <Navlink href="#">Blog</Navlink>
//                     <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Portfolio</Navlink>
//                     <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">About</Navlink>
//                     <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Contact</Navlink> */}

//                 </DropDownLinkContainer> : ''}

//             </NavbarContainer>