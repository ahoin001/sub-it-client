import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { signUpUser } from '../../util/UtilityUserFunctions'
import { Link } from 'react-router-dom'

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

  // ** React Hook Form 
  const { register, handleSubmit, errors } = useForm()

  // dynamically keep track of form field in state
  const handleInputChange = e => {
    // console.log('EVENT TARGET',e.target.type)
    const { type, value } = e.target
    setValues({ ...values, [type]: value })
  }

  // const submitUser = (e) => {
  //   e.preventDefault()
  //   const { username, email, password } = values

  //   const newUserInfo = {
  //     username,
  //     email,
  //     password
  //   }

  //   register(newUserInfo);

  // }

  const submitUser = (data) => {

    const { email, password } = values

    const newUserInfo = {
      email,
      password
    }

    signUpUser(newUserInfo);

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
                      <Alert logo={Warning}>Email is required</Alert>
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

                    errors.email &&
                    <>
                      <Alert logo={Warning}>Password is required</Alert>
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