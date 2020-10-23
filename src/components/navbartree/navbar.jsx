import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import AuthContext from '../../shared/context/auth-context'

import { StyledHeader } from './navbar.styled'
import { NavLinks, NavLink, NavLink2, PrimaryLink } from "../../treeponents/headers/light";

const Navbar = (props) => {

    const { userSignedIn, logOut } = useContext(AuthContext)

    const navLinks = [

        <NavLinks key={1}>

            {localStorage.getItem('userId')
                ?

                <React.Fragment>

                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>

                        <NavLink>
                            Dashboard
                    </NavLink>

                    </Link>

                    <Link to="/form" style={{ textDecoration: 'none' }}>

                        <NavLink>
                            Add Project
                        </NavLink>

                    </Link>

                </React.Fragment>


                :

                <React.Fragment>


                    <NavLink href="#">
                        About
                    </NavLink>

                    <NavLink href="#">
                        Blog
                    </NavLink>

                    <NavLink href="#">
                        Locations
                    </NavLink>

                    <NavLink href="#">
                        Pricing
                    </NavLink>

                </React.Fragment>

            }

        </NavLinks>
        ,

        <NavLinks key={2}>

            {/* {console.log(localStorage)} */}
            {localStorage.getItem('userId')
                ?

                <Link to="/">
                    <PrimaryLink onClick={() => logOut()} href="#">
                        Logout
                    </PrimaryLink>
                </Link>

                :

                <React.Fragment>

                    <Link to="/login">
                        <PrimaryLink href="#">
                            Login
                        </PrimaryLink>
                    </Link>

                </React.Fragment>

            }


        </NavLinks>
    ];

    return (
        <StyledHeader links={navLinks} />
    );
};

export default Navbar;