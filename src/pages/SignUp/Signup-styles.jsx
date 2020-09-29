// import { Link, withRouter } from 'react-router-dom'

import { Container as ContainerBase } from "../../treeponents/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import illustration from "../../images/signup-illustration.svg";
// import logo from "../../images/logo.svg";
// import googleIconImageSrc from "../../images/google-icon.png";
// import twitterIconImageSrc from "../../images/twitter-icon.png";
// import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

export const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
export const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
export const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
export const LogoLink = tw.a``;
export const LogoImage = tw.img`h-12 mx-auto`;
export const MainContent = tw.div`mt-12 flex flex-col items-center`;
export const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
export const FormContainer = tw.div`w-full flex-1 mt-8`;

export const SocialButtonsContainer = tw.div`flex flex-col items-center`;
export const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

export const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
export const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

export const Form = tw.form`mx-auto max-w-xs`;
export const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
export const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

export const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
export const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;