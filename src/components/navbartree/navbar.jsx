import React from 'react';
import { Link } from 'react-router-dom'


import { StyledHeader } from './navbar.styled'
import { NavLinks, NavLink, PrimaryLink } from "../../treeponents/headers/light";

// const logOut = (e) => {
//   e.preventDefault()
//   localStorage.removeItem('usertoken');
//   localStorage.removeItem('currentUserId');
//   localStorage.removeItem('currentUserName');
//   // this.props.history.push(`/login`)
// }

const navbar = (props) => {

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
            {localStorage.currentUserId
                ?

                <Link to="/">
                    <PrimaryLink onClick={(e) => props.logOut(e)} href="#">
                        Logout
                    </PrimaryLink>
                </Link>
               
                :

                <Link to="/login">
                    <PrimaryLink href="#">
                        Login
              </PrimaryLink>
                </Link>
            }


        </NavLinks>
    ];

    return (
        <StyledHeader links={navLinks} />
    );
};

export default navbar;