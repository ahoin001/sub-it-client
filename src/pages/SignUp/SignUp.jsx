import React, { useState } from "react";

import { register } from '../../util/UtilityUserFunctions'
import { Link, withRouter } from 'react-router-dom'

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
  LogoLink,
  LogoImage,
  MainContent,
  Heading,
  FormContainer,
  SocialButtonsContainer,
  SocialButton,
  DividerTextContainer,
  DividerText,
  Form,
  Input,
  SubmitButton
} from './Signup-styles.jsx'

const SignUpTree = () => {

  const [values, setValues] = useState({ username: '', email: '', password: '' })

  // dynamically keep track of form field in state
  const handleInputChange = e => {
    // console.log('EVENT TARGET',e.target.type)
    const { type, value } = e.target
    setValues({ ...values, [type]: value })
  }

  const submitUser = (e) => {
    e.preventDefault()
    const { username, email, password } = values

    const newUserInfo = {
      username,
      email,
      password
    }

    register(newUserInfo);

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
  let tosUrl = "#"
  let privacyPolicyUrl = "#"

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

                <SocialButtonsContainer>

                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img src={socialButton.iconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}

                </SocialButtonsContainer>

                <DividerTextContainer>
                  <DividerText>Or Sign up with your e-mail</DividerText>
                </DividerTextContainer>

                <Form>

                  {/* <Input type="text" placeholder="username" /> */}
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={e => handleInputChange(e)}
                  />

                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                  />

                  <SubmitButton
                    type="submit"
                    onClick={submitUser}
                    >

                    <SubmitButtonIcon
                      className="icon"
                    />

                    <span className="text">{submitButtonText}</span>

                  </SubmitButton>

                  <p tw="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by treact's{" "}
                    <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                      Terms of Service
                  </a>{" "}
                  and its{" "}
                    <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                      Privacy Policy
                  </a>
                  </p>

                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}

                    <Link to="login">
                    {/* TODO Check previous commits for styling of this */}
                      Sign In
                    </Link>

                  </p>
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