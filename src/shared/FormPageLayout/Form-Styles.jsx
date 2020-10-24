import { Container as ContainerBase } from "../../treeponents/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";

export const Container = tw(ContainerBase)`flex justify-center
                                           bg-primary-900 text-white font-medium
                                           min-h-screen -m-8`;

export const Content = tw.div`flex justify-center flex-1
                              pt-24
                              text-gray-900
                              bg-white
                              max-w-screen-xl 
                              shadow
                              sm:mx-20 sm:my-16 sm:rounded-lg `;

export const MainContainer = tw.div`p-6 
                                    
                                    sm:p-12 lg:w-8/12 xl:w-7/12`;

export const MainContent = tw.div`flex flex-col items-center
                                  mt-12 
                                  `;


export const FormContainer = tw.div`w-full flex-1 mt-8`;
export const Heading = tw.h1`text-3xl font-extrabold`;
export const LogoLink = tw.a``;
export const LogoImage = tw.img`h-12 mx-auto`;

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
export const DividerText = tw.div`leading-none px-2 inline-block bg-transparent
                                  text-sm text-gray-600 tracking-wide font-medium
                                  bg-white
                                  absolute inset-x-0 top-1/2
                                  transform -translate-y-1/2`;

export const Form = tw.form`mx-auto `;

export const Input = tw.input`px-8 py-4 mt-6
                              w-full   
                              border border-gray-200
                              bg-gray-300 
                              text-sm font-medium 
                              placeholder-gray-500   
                              focus:outline-none focus:border-gray-400 focus:bg-white
                              first:mt-0
                              rounded-lg `;


export const SubmitButton = styled.button`
  ${tw`flex items-center justify-center
       py-4 mt-16 
       w-full 
       bg-primary-500 
       text-gray-100 font-semibold
       tracking-wide
       rounded-lg
       transition-all duration-300 ease-in-out
       hover:bg-primary-900 focus:shadow-outline focus:outline-none
      `}
  
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
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;