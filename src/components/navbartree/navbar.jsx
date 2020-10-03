import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import AuthContext from '../../shared/context/auth-context'

import { StyledHeader } from './navbar.styled'
import { NavLinks, NavLink, PrimaryLink } from "../../treeponents/headers/light";

const Navbar = (props) => {

    const { userSignedIn, logOut } = useContext(AuthContext)

    const navLinks = [
        <NavLinks key={1}>

            {/* <Link to="/"> */}

            <NavLink href="#">
                About
           </NavLink>

            {/* </Link> */}

            <NavLink href="#">
                Blog
          </NavLink>

            <NavLink href="#">
                Locations
          </NavLink>

            <NavLink href="#">
                Pricing
          </NavLink>

        </NavLinks>,

        <NavLinks key={2}>

            {console.log(localStorage)}
            {userSignedIn
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

                    <Link to="/form">
                        <PrimaryLink href="#">
                            + Add Project
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