import tw from "twin.macro";
import styled from "styled-components";

export const AlertContainer = styled.div`
  
  ${tw`flex items-center
       p-3 my-4 
       w-full
       bg-orange-200 text-base
       rounded-md `}
  

`;

export const AlertText = styled.div`
  
  ${tw`text-yellow-800 font-bold
        ml-4`}
  
`;

export const CustomAlertText = styled.div(({ type }) => [

  tw`ml-4
    font-bold
      `,

  type === 'isSuccess' && tw`text-2xl text-green-800`,

  type === 'isInfo' && tw`text-2xl text-blue-800 `,

  type === 'isWarning' && tw`text-2xl text-yellow-800 `,

  type === 'isDanger' && tw` text-2xl text-red-800`,


]);

export const CustomAlertContainer = styled.div(({ type,center }) => [

  tw`flex items-center
  p-3 my-4 
  w-full
  text-base
  rounded-md 
     `,

  center === true && tw`p-12 sm:p-24 flex justify-center`,

  type === 'isSuccess' && tw`text-2xl 
                             bg-green-200
                                    `,

  type === 'isInfo' && tw` text-2xl 
                          bg-blue-200
                                           `,

  type === 'isWarning' && tw`text-2xl 
                             bg-yellow-200
                                      `,

  type === 'isDanger' && tw` text-2xl 
                             bg-red-200
                                    `,




]);