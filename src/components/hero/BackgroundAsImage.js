import React from "react";
import { Link } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";

import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const Container = styled.div`
    ${tw`relative mx-auto  bg-center bg-cover py-4`}
    background-image: url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
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
    return (
        <Container>
            <OpacityOverlay />

            <HeroContainer>
                {/* <StyledHeader links={navLinks} /> */}

                <TwoColumn>
                    <LeftColumn>
                        <Notification>
                            Login <br />
                            Email: demo@demo.com <br />
                            Password: demo
                        </Notification>

                        <Heading>
                            <span>Easier Playback</span>
                            <br />
                            <SlantedBackground>
                                Easier Subtitles
                            </SlantedBackground>
                        </Heading>

                        {localStorage.getItem("currentUserId") ? (
                            <Link to="/dashboard">
                                <PrimaryAction>Dashboard </PrimaryAction>
                            </Link>
                        ) : (
                            <Link to="/signup">
                                <PrimaryAction>Sign Up Here ! </PrimaryAction>
                            </Link>
                        )}
                    </LeftColumn>

                    <RightColumn>
                        {/* 
                        <StyledResponsiveVideoEmbed
              // url="https://res.cloudinary.com/damclaohv/video/upload/v1615320032/SubtitleHERO-Demo_hqnhjq.mov"
              url="https://www.youtube.com/watch?v=h4r7PrFIGF8"
              background="transparent"
            /> */}

                        <div
                            className={"video"}
                            style={{
                                position: "relative",
                                background: "black",
                                paddingBottom: "56.25%" /* 16:9 */,
                                paddingTop: 25,
                                height: 0,
                            }}
                        >
                            <iframe
                                title="Embeded Video"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                src={
                                    "https://www.youtube.com/embed/h4r7PrFIGF8"
                                }
                                frameBorder="0"
                            />
                        </div>
                    </RightColumn>
                </TwoColumn>
            </HeroContainer>
        </Container>
    );
};
