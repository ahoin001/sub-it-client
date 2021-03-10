import { useState } from "react";
import { useAnimation, useCycle } from "framer-motion";

//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedNavToggler() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [x, cycleX] = useCycle("0%", "150%");
  const animation = useAnimation();

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks);
    animation.start({ x: x, display: "block" });
    cycleX();
  };

  return {showNavLinks,animation, toggleNavbar }
}

// ******
// const Header = tw.header`
//   flex justify-between items-center h-20
//   mx-auto cursor-pointer
//   `;

// export const MotionHeader = motion.custom(tw.header`
//   flex justify-between items-center h-20
//   mx-auto cursor-pointer
// `);

// export const NavLinks = tw.div`inline-block`;

// /* hocus: stands for "on hover or focus"
//  * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
//  */
// export const NavLink = tw(Link)`
//   text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
//   cursor-pointer
//   font-semibold tracking-wide transition duration-300
//   pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
// `;
// // export const NavLink2 = styled(Link)`
// //  ${tw` text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
// //   font-semibold tracking-wide transition duration-300
// //   pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`};

// // `;

// export const PrimaryLink = tw(NavLink)`
//   lg:mx-0
//   px-8 py-3 rounded bg-primary-500 text-gray-100
//   hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
//   border-b-0
// `;

// export const LogoLink = styled(NavLink)`
//   ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

//   img {
//     ${tw`w-10 mr-3`}
//   }
// `;

// // export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;

// export const MotionMobileNavLinksContainer = motion.custom(styled.nav`${tw.nav`flex flex-1 items-center justify-between`}`);

// export const NavToggle = (tw.div`
//   lg:hidden z-50 focus:outline-none hocus:text-primary-500 transition duration-300
// `);

// export const MobileNavLinks = motion.custom(styled.div`
//   ${tw` p-4
//         fixed top-0  inset-x-0 
//         text-gray-900 text-center 
//         bg-white
//         lg:hidden z-30 
//         border rounded-lg`}
//         /* fixed top-0 inset-x-0   */
        
//   ${NavLinks} {
//     ${tw` flex flex-col items-center
//           my-8 
          
//         `
//   }
//   }
// `);

// export const DesktopNavLinks = tw.nav`
//   hidden lg:flex flex-1 justify-between items-center
// `;

// return (
//   <MotionHeader className={className || "header-light"}>

//     <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
//       {logoLink}
//       {links}
//     </DesktopNavLinks>

//     <MotionMobileNavLinksContainer css={collapseBreakpointCss.MotionMobileNavLinksContainer}>

//       {logoLink}

//       <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>

//         <motion.div
//           onClick={toggleNavbar}
//         >
//           {links}
//         </motion.div>

//       </MobileNavLinks>

//       <NavToggle
//         // onClick={toggleNavbar}
        
//         className={showNavLinks ? "open" : "closed"}
//       >

//         {/* {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />} */}

//         {/* ** Attempt Fix  */}

//         <motion.button onTap={toggleNavbar}>

//           {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}

//         </motion.button>

//       </NavToggle>

//     </MotionMobileNavLinksContainer>

//   </MotionHeader>


// );