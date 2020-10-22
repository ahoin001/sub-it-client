import tw from "twin.macro";
import styled from "styled-components";

// Container to center Buttons
export const ButtonsContainer = tw.div`flex items-center justify-between 
                                       p-5                                       
                                       `;

export const ActionButton = styled.span(({ isDelete, isEdit, isCancel, isSave }) => [

    tw`flex items-center justify-center
       p-3 text-base
       rounded-lg shadow-xs cursor-pointer 
       hover:text-white
       `,

    // Ternary
    isDelete && tw`font-bold text-red-500 bg-red-200 hover:bg-red-500 `,

    // Conditional Style
    isEdit && tw`font-bold text-indigo-500 bg-indigo-200 mr-4 hover:bg-indigo-500`,

    isSave && tw`font-bold text-green-500 bg-green-200 mr-4 hover:bg-green-500`,

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