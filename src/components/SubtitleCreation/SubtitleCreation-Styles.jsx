// import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

// export const StationContainer = tw.div`flex`;

export const SubtitleCreationContainer = styled.div`
  
  ${tw`flex flex-col items-center justify-center 
       w-3/6 
       p-6 
       bg-gray-900
       `}
  
   /* bg-gradient-to-t from-pink-100  */

  .video{
    ${tw` bg-gray-500 `}
  }

  .btn {
    ${tw` mb-8 `}
  }

  .creationSub {
      width:700px
  }

  
  @media (max-width: 730px) {
    
    .creationSub {
      width:500px
  }

  }
  
  @media (min-width: 1024px) {
    
    .creationSub {
      width:900px
  }

  }

`;

export const OutlineButton = styled.button(({ primaryColor }) => [
  
  tw`py-2 px-4 mt-6
    text-2xl font-bold
    border rounded focus:outline-none
    hover:border-transparent`,

  // Ternary
  primaryColor === 'isIntime' && tw`text-green-700 border-green-700 bg-transparent hover:text-white hover:bg-green-500  `,
  
  primaryColor === 'isOutTime' && tw`text-red-700 border-red-700 bg-transparent hover:text-white hover:bg-red-500  `,
  
  primaryColor === 'isGray' && tw`text-gray-700 border-gray-700 bg-transparent hover:text-white hover:bg-gray-700  `,

]);

export const ButtonContainer = styled.div(({ primaryColor }) => [
  
  tw`py-2 px-4
     flex flex-col items-center content-center `,
]);