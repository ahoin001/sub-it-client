import React, { useState } from 'react';
import tw from "twin.macro";
// import styled from "styled-components";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";


export const NavbarContainer = tw.header`
w-full bg-red-800
text-gray-700 
bg-red-300 

`;

export const NavbarContainer2 = tw.div`
flex flex-col bg-blue-300 
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

export const DropDownLinkContainer = tw.button`
bg-green-400
flex flex-col justify-center items-center
p-4
h-2/4
w-full
md:hidden 
`;


export const NavlinksContainer = tw.nav`
flex-col flex-grow 
pb-4 
md:pb-0 hidden md:flex md:justify-end md:flex-row
`;


export const Navlink = tw.nav`
px-4 py-2 mt-2 
text-sm 
font-semibold 
bg-transparent rounded-lg 
md:mt-0 md:ml-4 
hover:text-gray-900 hover:bg-gray-200
focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
`;


const Navbardropdown = () => {

    const [showDropDown, setshowDropDown] = useState(true)

    return (
        <>
            <NavbarContainer>

                <NavbarContainer2>

                    <LogoContainer>
                        <Logo onClick={() => setshowDropDown(!showDropDown)}>Flowtrail UI</Logo>

                        <HamburgerIcon
                            onClick={() => setshowDropDown(!showDropDown)}
                        >

                            {showDropDown ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}

                        </HamburgerIcon>
                    </LogoContainer>

                    <NavlinksContainer>

                        <Navlink href="#">Blog</Navlink>
                        <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Portfolio</Navlink>
                        <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">About</Navlink>
                        <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Contact</Navlink>

                    </NavlinksContainer>

                </NavbarContainer2>

                {showDropDown ? <DropDownLinkContainer>

                    <Navlink href="#">Blog</Navlink>
                    <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Portfolio</Navlink>
                    <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">About</Navlink>
                    <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Contact</Navlink>

                </DropDownLinkContainer> : ''}

            </NavbarContainer>
        </>

    );
};

export default Navbardropdown;




