import React, { useContext } from 'react';
// import { Link } from 'react-router-dom'

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

                    {/* <PrimaryLink to="/login">
                        Login
                        </PrimaryLink>

                    <NavLink to="/">
                        FROM CUSTOM
                    </NavLink>

                    <NavLink to="#">
                        Blog
                    </NavLink>

                    <NavLink to="#">
                        Locations
                    </NavLink>

                    <NavLink to="#">
                        Pricing
                    </NavLink> */}

                </React.Fragment>

            }

        </NavLinks>
        ,

        <NavLinks key={2}>

            {localStorage.getItem('userId')
                ?

                <PrimaryLink to="/" onClick={() => logOut()} >
                    Logout
                </PrimaryLink>

                :

                <React.Fragment>

                    {/* <Link to="/login"> */}
                    <PrimaryLink to="/login">
                        Login
                        </PrimaryLink>
                    {/* </Link> */}

                </React.Fragment>

            }

        </NavLinks>

    ];

    return (

        <StyledHeader links={navLinks} />

    );
};

export default Navbar;