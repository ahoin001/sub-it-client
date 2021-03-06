import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { ReactComponent as Warning } from '../../shared/Alerts/Icons/Warning.svg'

import AuthContext from '../../shared/context/auth-context'

// imgs
import logo from "../../images/logo.svg";
import googleIconImageSrc from "../../images/google-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

import Alert from '../../shared/Alerts/Alert'

// styled components
import {
  Container,
  Content,
  MainContainer,
  LogoImage,
  MainContent,
  Heading,
  FormContainer,
  DividerTextContainer,
  Form,
  Input,
  SubmitButton,

} from '../../shared/FormPageLayout/Form-Styles'

import AnimationRevealPage from "../../helpers/AnimationRevealPage";

const Login = (props) => {

  // console.log(`YOU'RE IN ${process.env.REACT_APP_API_URL}`)

  // ** React Hook Form 
  const { register, handleSubmit, errors } = useForm()

  const { login, secret } = useContext(AuthContext)

  // console.log('THE SECRET IS !!!!!!!!!!!!!!!! ', secret)

  let history = useHistory();

  // * Data provided by react form hook
  const submitUser = async (data) => {

    const { email, password } = data

    const newUserInfo = {
      email,
      password
    }

    try {

      await login(newUserInfo)
      // let res = await login(newUserInfo)
      // console.log('********************************* res From Login: ', res)

      history.push("/dashboard");

    } catch (error) {
      console.log('Error in Login')
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
  let submitButtonText = "Sign In"
  let SubmitButtonIcon = LoginIcon

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
                  {/* <DividerText>Or Sign in with your e-mail</DividerText> */}
                </DividerTextContainer>

                {/* handleSubmit will validate inputs before excecuting submission function */}
                <Form onSubmit={handleSubmit(submitUser)}>

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    ref={register({ required: true })}
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

                    <SubmitButtonIcon className="icon" />

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

export default Login;