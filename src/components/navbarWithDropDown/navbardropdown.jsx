import React, { useState } from 'react';
import tw from "twin.macro";
// import styled from "styled-components";

import { DropDownToggler } from '../../helpers/useAnimatedNavToggler'
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { motion } from 'framer-motion';


export const NavbarContainer = tw.header`
w-full relative
p-4
bg-primary-100
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

export const DropDownLinkContainer = tw.button`
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


export const Navlink = tw.nav`
px-4 py-2 mt-2 bg-green-200
w-full
text-sm 
font-semibold 
rounded-lg 
md:mt-0 md:ml-4 
hover:text-gray-900 hover:bg-gray-200
focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
`;


const Navbardropdown = () => {

    // const [showDropDown, setshowDropDown] = useState(false)

    const { showDropDown, toggleDropdown, dropDownVariants } = DropDownToggler()

    return (
        <>
            <NavbarContainer>

                <NavbarContainer2>

                    <LogoContainer>
                        <Logo>SubIt Animation</Logo>

                        <HamburgerIcon
                            onClick={() => toggleDropdown()}
                        >

                            {showDropDown ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}

                        </HamburgerIcon>
                    </LogoContainer>

                    <NavlinksContainer>

                        <Navlink href="#">Blog</Navlink>
                        <Navlink onClick={() => toggleDropdown()} href="#">Portfolio</Navlink>
                        <Navlink onClick={() => toggleDropdown()} href="#">About</Navlink>
                        <Navlink onClick={() => toggleDropdown()} href="#">Contact</Navlink>

                    </NavlinksContainer>

                </NavbarContainer2>

                {
                    showDropDown ?
                        <>
                            <motion.div
                                initial="exit"
                                animate={showDropDown ? "enter" : "exit"}
                                variants={dropDownVariants}
                            >

                                <DropDownLinkContainer>

                                    <Navlink href="#">Blog</Navlink>
                                    <Navlink onClick={() => toggleDropdown(!showDropDown)} href="#">Portfolio</Navlink>
                                    <Navlink onClick={() => toggleDropdown(!showDropDown)} href="#">About</Navlink>
                                    <Navlink onClick={() => toggleDropdown(!showDropDown)} href="#">Contact</Navlink>

                                </DropDownLinkContainer>

                            </motion.div>

                            {/* <DropDownLinkContainer>

                                <Navlink href="#">Blog</Navlink>
                                <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Portfolio</Navlink>
                                <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">About</Navlink>
                                <Navlink onClick={() => setshowDropDown(!showDropDown)} href="#">Contact</Navlink>

                            </DropDownLinkContainer> : '' */}
                        </>

                        : ''

                }

            </NavbarContainer>
        </>

    );
};

export default Navbardropdown;




