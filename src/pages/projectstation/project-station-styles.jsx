// import { motion } from "framer-motion";
import { Container as ContainerBase } from "../../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";

export const StationContainer = styled.div`
  
  ${tw`flex flex-col items-center 
       bg-primary-900
       min-h-screen
       ` }
  
  .video{
    ${tw` bg-gray-500 `}
  }

`;

// TODO Make this more reusable DRY
export const Container = styled(ContainerBase)`

${tw`flex justify-center
     bg-primary-900 text-white font-medium
     min-h-screen`}

`;

export const ContentContainer = styled.div`
                    
     ${tw`
          w-11/12 
          p-16 my-8
          text-gray-900
          bg-white
          shadow
          rounded-lg `}               
                           
  video{
       width:100%;
  }

`;
