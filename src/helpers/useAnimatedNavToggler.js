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

  return { showNavLinks, animation, toggleNavbar }
}


export const DropDownToggler = () => {


const dropDownVariants = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8
    },
    display: "block"
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.2,
      //delay: 0.3
    },
    transitionEnd: {
      display: "none"
    }
  }
};

  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropdown = () => {

    setShowDropDown(!showDropDown);

  };

  return { showDropDown, toggleDropdown, dropDownVariants };

}

{/* <>
            <NavbarContainer>

                <NavbarContainer2>

                    <LogoContainer>
                        <Logo>Flowtrail UI</Logo>

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
        </> */}