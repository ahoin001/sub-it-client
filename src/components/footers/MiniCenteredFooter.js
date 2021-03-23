import React from "react";
import tw from "twin.macro";

import { Container as ContainerBase } from "../misc/Layouts";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a` text-xl font-black border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
    return (
        <Container>
            <Content>
                <Row>
                    <LogoContainer>
                        {/* Not sure if will use logo or just text */}
                        {/* <LogoImg src={logo} /> */}
                        <LogoText>Subit</LogoText>
                    </LogoContainer>

                    <LinksContainer>
                        <a>For demo purposes only</a> {"\n"}
                    </LinksContainer>
                    <div>
                        {" "}
                        <Link href="https://www.linkedin.com/in/alexanderhoinville">
                            {" "}
                            Connect on LinkedIn !{" "}
                        </Link>
                    </div>
                    <CopyrightText>
                        &copy; Copyright 2020, Built By Ironhack Grads, Enjoy!
                    </CopyrightText>
                </Row>
            </Content>
        </Container>
    );
};
