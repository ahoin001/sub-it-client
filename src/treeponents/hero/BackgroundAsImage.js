import React from "react";
import { Link } from 'react-router-dom'

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const Container = styled.div`
  ${tw`relative mx-auto  bg-center bg-cover py-4`}
  background-image: url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
`;

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }

  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;

const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;

const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  
  span {
    ${tw`inline-block mt-2`}
  }

`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-extrabold text-lg`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default (props) => {

  // const logOut = (e) => {
  //   e.preventDefault()
  //   localStorage.removeItem('usertoken');
  //   localStorage.removeItem('currentUserId');
  //   localStorage.removeItem('currentUserName');
  //   // this.props.history.push(`/login`)
  // }


  const navLinks = [
    <NavLinks key={1}>

      {/* <Link to="/"> */}

      {/* <NavLink href="#">
        About
       </NavLink> */}

      {/* </Link> */}

      {/* <NavLink href="#">
        Blog
      </NavLink> */}

      {/* <NavLink href="#">
        Locations
      </NavLink> */}

      {/* <NavLink href="#">
        Pricing
      </NavLink> */}

      <div></div>

    </NavLinks>

    ,

    <NavLinks key={2}>

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
    <Container>

      <OpacityOverlay />

      <HeroContainer>

        {/* <StyledHeader links={navLinks} /> */}

        <TwoColumn>

          <LeftColumn>

            <Notification>Demo Only Please use Short Videos</Notification>
           
            <Notification>Login  <br />
            Email: demo@demo.com  <br />
            Password: demo
            </Notification>

            <Heading>
              <span>Easier Playback</span>
              <br />
              <SlantedBackground>Easier Subtitles</SlantedBackground>
            </Heading>

            <Link to="signup">

              <PrimaryAction>Sign Up Here ! </PrimaryAction>

            </Link>

          </LeftColumn>

          <RightColumn>

            <StyledResponsiveVideoEmbed
              url="https://res.cloudinary.com/damclaohv/video/upload/v1604190899/Demo_Video_fmayb9.mp4"
              background="transparent"
            />

          </RightColumn>

        </TwoColumn>

      </HeroContainer>

    </Container>

  );
};
