import React from "react";
import { Link } from 'react-router-dom'

import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

// import logo from "../../images/logo.svg";
// import subItLogo from "../../images/OriginalImgs/SubitLogo.png";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  height: "5rem",
  cursor: "pointer",
};

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  cursor-pointer
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
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

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const mobileNavLinksContainerStyles = {
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "center",
  flex: "1 1 0%"
};

export const NavToggle = (tw.div`
  lg:hidden z-50 focus:outline-none hocus:text-primary-500 transition duration-300
`);

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

const MobileNavLinksStyles = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  textAlign: "center"
};


export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">Some</NavLink>
      <NavLink href="/#">Default</NavLink>
      <NavLink href="/#">Links</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink> */}
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/#">Sign Up</PrimaryLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    // <Link to="/">

    <LogoLink to="/">
      {/* <img src={subItLogo} alt="logo" /> */}
        SubIt
    </LogoLink>

    // </Link>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <>
      {/* <motion.div animate className={className} {...props}>
      <motion.div animate />
    </motion.div> */}

      <motion.div>
        <motion.div
          initial={{ x: "150%", display: "none" }}
          animate={animation}
        //css={collapseBreakpointCss.mobileNavLinks}
        >
          {/* <motion.div onClick={toggleNavbar}>{links}</motion.div> */}
          <motion.div onClick={toggleNavbar}>
            I should be sliding on each button click
        </motion.div>
        </motion.div>

        <motion.button onTap={toggleNavbar}>
          <div
            // onClick={toggleNavbar}
            className={showNavLinks ? "open" : "closed"}
          >
            {showNavLinks ? (
              <div tw="w-6 h-6"> XXX </div>
            ) : (
              <div tw="w-6 h-6"> OOO </div>
            )}
          </div>
        </motion.button>
      </motion.div>
    </>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    MotionMobileNavLinksContainer: tw`sm:flex`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    MotionMobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    MotionMobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    MotionMobileNavLinksContainer: tw`lg:hidden`
  }
};
