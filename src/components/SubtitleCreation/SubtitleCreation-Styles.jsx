// import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

export const SubtitleCreationContainer = styled.div`
  
  ${tw`flex items-center justify-center 
       w-full overflow-x-auto
       mx-auto p-8
       `}

       
       /* bg-gray-800  */


  @media (max-width: 730px) {


  }
  
  @media (min-width: 1024px) {

  }

`;

export const ButtonsContainer = tw.div`
flex flex-col items-center content-center
w-4/12
py-2 px-4 mx-auto

`;


