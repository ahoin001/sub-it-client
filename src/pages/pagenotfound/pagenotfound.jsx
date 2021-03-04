import React from 'react';

import {
    Container,
    Content,
    MainContainer,
} from '../../shared/FormPageLayout/Form-Styles'

import {
    LeftContent,
    Header,
    Text,
    RedirectLink
} from './notfoundstyles'

import Cat from './Cat.svg'

const PageNotFound = () => {
    return (
       
        <Container>

            <Content>

                <MainContainer>

                    <LeftContent >

                        <Header >404 Error </Header>

                        <Text

                        >
                            Sorry we couldn't find this page.
                        </Text>

                        <Text>But dont worry,we can get you back to our homepage.</Text>

                        <RedirectLink to="/">Back to Home</RedirectLink>

                    </LeftContent>

                    <div >
                        {/* ! SVG HERE */}
                        <img src={Cat} alt="cat" width="800px" />
                    </div>

                </MainContainer>

            </Content>

        </Container>
        
    );
};

export default PageNotFound;