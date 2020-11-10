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

                    {/* <Link to="/" style={{ textDecoration: 'none' }}> */}

                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        Home
                        </NavLink>

                    {/* </Link> */}

                    {/* <Link to="/dashboard" style={{ textDecoration: 'none' }}> */}

                    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                        Dashboard
                        </NavLink>

                    {/* </Link> */}

                    {/* <Link to="/form" style={{ textDecoration: 'none' }}> */}

                    <NavLink to="/form" style={{ textDecoration: 'none' }}>
                        Add Project
                        </NavLink>

                    {/* </Link> */}

                </React.Fragment>


                :

                <React.Fragment>


                    <NavLink to="#">
                        About
                    </NavLink>

                    <NavLink to="#">
                        Blog
                    </NavLink>

                    <NavLink to="#">
                        Locations
                    </NavLink>

                    <NavLink to="#">
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