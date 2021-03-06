import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { signUpUser } from '../../util/UtilityUserFunctions'
import { Link,useHistory } from 'react-router-dom'

import Alert from '../../shared/Alerts/Alert'
import { ReactComponent as Warning } from '../../shared/Alerts/Icons/Warning.svg'

// Needed for Treact
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import logo from "../../images/logo.svg";
import googleIconImageSrc from "../../images/google-icon.png";
import twitterIconImageSrc from "../../images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

import {
  Container,
  Content,
  MainContainer,
  // LogoLink,
  LogoImage,
  MainContent,
  Heading,
  FormContainer,
  // SocialButtonsContainer,
  // SocialButton,
  DividerTextContainer,
  // DividerText,
  Form,
  Input,
  SubmitButton
} from '../../shared/FormPageLayout/Form-Styles'

const SignUpTree = () => {

  console.log(`YOU'RE IN ${process.env.REACT_APP_API_URL}`)

  // ** React Hook Form Made this much easier, future alex use this please
  const { register, handleSubmit, errors } = useForm()

  let history = useHistory();

  const submitUser = (data) => {

    const { email, password } = data

    const newUserInfo = {
      email,
      password
    }

    signUpUser(newUserInfo);
    history.push("/login");

  }

  let headingText = "Sign Up For SubIt"

  let socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com"
    }
  ]
  
  let submitButtonText = "Sign Up"
  let SubmitButtonIcon = SignUpIcon

  return (

    <AnimationRevealPage disabled>
      <Container>
        <Content>
          <MainContainer>

            <Link to="/">

              <LogoImage src={logo} />

            </Link>

            <MainContent>

              <Heading>{headingText}</Heading>

              <FormContainer>

                {/* <SocialButtonsContainer>

                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img src={socialButton.iconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}

                </SocialButtonsContainer> */}

                <DividerTextContainer>
                  {/* <DividerText>Or Sign up with your e-mail</DividerText> */}
                </DividerTextContainer>

                <Form onSubmit={handleSubmit(submitUser)} >

                  {/* <Input type="text" placeholder="username" /> */}
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    ref={register({ required: true })}
                    // onChange={e => handleInputChange(e)}
                  />

                  {

                    errors.email &&
                    <>
                      <Alert type="isWarning" logo={Warning}>Email is required</Alert>
                    </>

                  }

                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register({ required: true })}
                    // onChange={handleInputChange}
                  />

                  {

                    errors.password &&
                    <>
                      <Alert type="isWarning" logo={Warning}>Password is required</Alert>
                    </>

                  }

                  <SubmitButton
                    type="submit"
                  // onClick={submitUser}
                  >

                    <SubmitButtonIcon
                      className="icon"
                    />

                    <span className="text">{submitButtonText}</span>

                  </SubmitButton>

                </Form>

              </FormContainer>

            </MainContent>

          </MainContainer>

        </Content>

      </Container>

    </AnimationRevealPage>

  );

};

export default SignUpTree;