import React, { useState, useContext } from "react";
import { Link, useHistory } from 'react-router-dom'

import AuthContext from '../../shared/context/auth-context'

// import { login } from '../../util/UtilityUserFunctions'

// import { css } from "styled-components/macro"; //eslint-disable-line

import logo from "../../images/logo.svg";
import googleIconImageSrc from "../../images/google-icon.png";
// import twitterIconImageSrc from "../../images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

import {
  Container,
  Content,
  MainContainer,
  // LogoLink,
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
  SubmitButton,

} from './Login-styles.jsx'

import AnimationRevealPage from "../../helpers/AnimationRevealPage";

const Login = (props) => {

  const [values, setValues] = useState({ username: '', email: '', password: '' })

  const { login, secret } = useContext(AuthContext)

  console.log('THE SECRET IS !!!!!!!!!!!!!!!! ', secret)

  // dynamically keep track of form field in state
  const handleInputChange = e => {
    // console.log('EVENT TARGET',e.target.type)
    const { type, value } = e.target
    setValues({ ...values, [type]: value })
  }

  let history = useHistory();

  const submitUser = async (e) => {

    e.preventDefault()
    const { username, email, password } = values

    const newUserInfo = {
      username,
      email,
      password
    }

    try {

      let res = await login(newUserInfo)
      console.log('********************************* res From Login: ', res)

      history.push("/dashboard");

    } catch (error) {
      console.log(error)
    }

  }

  let headingText = "Login To Subit"
  let socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com"
    }
  ]
  let submitButtonText = "Sign n"
  let SubmitButtonIcon = LoginIcon
  let forgotPasswordUrl = "#"
  let signupUrl = "#"

  return (
    <AnimationRevealPage disabled>

      <Container>

        <Content>

          <MainContainer>

            <Link to="/">
              {/* <LogoLink href={logoLinkUrl}> */}
              <LogoImage src={logo} />
              {/* </LogoLink> */}
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
                  <DividerText>Or Sign in with your e-mail</DividerText>
                </DividerTextContainer>

                <Form>

                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={e => handleInputChange(e)}
                  />

                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={e => handleInputChange(e)}
                  />

                  <SubmitButton
                    type="submit"
                    onClick={submitUser}
                  >

                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>

                </Form>

                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                    Forgot Password ?
                </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Dont have an account?{" "}
                  <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                    Sign Up
                </a>
                </p>

              </FormContainer>

            </MainContent>

          </MainContainer>

          {/* <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer> */}

        </Content>

      </Container>

    </AnimationRevealPage>
  );
};

export default Login;