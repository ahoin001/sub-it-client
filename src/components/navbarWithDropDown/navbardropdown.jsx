import React, { useState } from "react";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import {
    HamburgerIcon,
    HeaderNavbarContainer,
    NavbarContainer,
    AuthandToggleContainer,
    Logo,
    DropDownLinkContainer,
    DesktopLinksContainer,
    NavLink,
    DropDownNavLink,
    AuthLink,
} from "./navbardropdown-styles";

const NavbarDropDown = ({ logOut }) => {
    const [showDropDown, setshowDropDown] = useState(false);

    const navLinksUserAuth = localStorage.getItem("userId") ? (
        <React.Fragment>
            <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
            </NavLink>

            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                Dashboard
            </NavLink>

            <NavLink to="/form" style={{ textDecoration: "none" }}>
                Add Project
            </NavLink>
        </React.Fragment>
    ) : (
        <React.Fragment></React.Fragment>
    );

    const userAuthentication = localStorage.getItem("userId") ? (
        <AuthLink to="/" onClick={() => logOut()}>
            Logout
        </AuthLink>
    ) : (
        <AuthLink to="/login">Login</AuthLink>
    );

    return (
        <>
            <HeaderNavbarContainer>
                <NavbarContainer>
                    <Logo to="/">SubIt</Logo>

                    {/* Links Displayed on lg and larger screens */}
                    <DesktopLinksContainer>
                        {navLinksUserAuth}
                    </DesktopLinksContainer>

                    <AuthandToggleContainer>

                        {userAuthentication}

					{localStorage.getItem("userId") ? <HamburgerIcon
                            onClick={() => setshowDropDown(!showDropDown)}
                            className={showDropDown ? "open" : "closed"}
                        >
                            {showDropDown ? (
                                <CloseIcon tw="w-16 h-16" />
                            ) : (
                                <MenuIcon tw="w-6 h-6" />
                            )}
                        </HamburgerIcon> :
				    
						""

				    }

                    </AuthandToggleContainer>

                </NavbarContainer>

                {/* Dropdown Mobile Links Container  */}
                {showDropDown && localStorage.getItem("userId") ? (
                    <DropDownLinkContainer>
                        <DropDownNavLink
                            onClick={() => setshowDropDown(!showDropDown)}
                            to="/form"
                        >
                            Add Project
                        </DropDownNavLink>
                        <DropDownNavLink
                            onClick={() => setshowDropDown(!showDropDown)}
                            to="/dashboard"
                        >
                            Dashboard
                        </DropDownNavLink>
                        <DropDownNavLink
                            onClick={() => {
                                setshowDropDown(!showDropDown);
                                logOut();
                            }}
                            to="/"
                        >
                            Logout
                        </DropDownNavLink>
                    </DropDownLinkContainer>
                ) : showDropDown && !localStorage.getItem("userId") ? (
                    <DropDownLinkContainer>
                        <DropDownNavLink
                            onClick={() => setshowDropDown(!showDropDown)}
                            href="#"
                        >
					    
                        </DropDownNavLink>
                        <DropDownNavLink
                            onClick={() => setshowDropDown(!showDropDown)}
                            href="#"
                        >
                            Why use Subit
                        </DropDownNavLink>

                        <AuthLink
                            to="/login"
                            onClick={() => setshowDropDown(!showDropDown)}
                        >
                            Login
                        </AuthLink>
                    </DropDownLinkContainer>
                ) : (
                    ""
                )}
            </HeaderNavbarContainer>
        </>
    );
};

export default NavbarDropDown;
