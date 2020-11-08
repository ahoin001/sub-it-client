import tw from "twin.macro";
import styled from "styled-components";

export const SubtitleTable = tw.table`block w-full overflow-x-auto table-fixed leading-normal 
                                      mt-6 
                                      antialiased font-sans font-bold
                                      shadow-xl border-2 rounded-lg`;

export const TableBody = tw.tbody`w-full 
                                  leading-normal`;

export const TableHeader = tw.th`px-2 py-3 w-full
                                border-b-2 border-gray-200 
                                bg-primary-300 text-white text-lg text-center font-semibold  uppercase tracking-wider
                                `;

export const TableData = styled.td`

${tw`px-6 py-5 
     text-lg
     border-b border-gray-300 
     bg-white
     
     `}

textarea {
  ${tw`text-blue-900 font-semibold
  `}
}

`;


// export const Te = styled.td(({ isEdit }) => [

//   tw`px-12 py-5 
//      text-lg
//      border-b border-gray-300 
//      bg-white    
//      `,

//   // Ternary
//   isRed && tw`text-red-500 bg-red-200 hover:bg-red-500 `,

//   // Conditional Style
//   isEdit && tw`text-indigo-500 bg-indigo-200  hover:bg-indigo-500`,

//   isGreen && tw`text-green-500 bg-green-200  hover:bg-green-500`,

// ]);