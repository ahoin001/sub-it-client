import tw from "twin.macro";
import styled from "styled-components";

// Container to Space Around Buttons
export const ButtonsContainer = tw.div`flex flex-col items-center justify-around p-2
                                       sm:flex-row  
                                       `;

export const ButtonsColumnContainer = tw.div`py-2 px-4 flex flex-col items-center content-center`;


export const ActionButton = styled.span(({ isRed, isEdit, isCancel, isGreen }) => [

  tw`flex items-center justify-center
     my-2 sm:my-0 py-2 px-6
     w-6/12 sm:w-4/12
     text-base font-bold
     
     rounded-lg shadow-xs cursor-pointer 
     hover:text-white
       `,

  // Ternary
  isRed && tw`text-red-500 bg-red-200 hover:bg-red-500 `,

  // Conditional Style
  isEdit && tw`text-indigo-500 bg-indigo-200  hover:bg-indigo-500`,

  isGreen && tw`text-green-500 bg-green-200  hover:bg-green-500`,

]);


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

export const SolidButton = styled.button(({ primaryColor }) => [

  tw`flex items-center justify-center
     py-4 px-4 mt-12 
     w-full
     font-semibold 
     text-gray-100 tracking-wide 
     bg-primary-500
     rounded-lg
     transition-all duration-300 ease-in-out
     hover:bg-primary-900 
     focus:shadow-outline focus:outline-none
     `,
  primaryColor === 'isIntime' && tw`text-2xl 
                                    bg-green-400
                                    hover:text-white hover:bg-green-600  `,

  primaryColor === 'isOutTime' && tw`text-2xl 
                                     bg-red-400
                                     hover:text-white hover:bg-red-600  `,

  primaryColor === 'isRed' && tw`text-2xl 
                                     bg-red-400
                                     hover:text-white hover:bg-red-600  `,

  primaryColor === 'isGray' && tw` text-2xl 
                                   bg-gray-500
                                   hover:text-white hover:bg-gray-700  `,


]);