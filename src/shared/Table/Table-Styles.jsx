import tw from "twin.macro";
import styled from "styled-components";

export const SubtitleTable = tw.table`block overflow-auto table-fixed leading-normal 
                                      bg-gray-200
                                      mt-6
                                      min-w-full max-w-lg 
                                      antialiased font-sans font-bold
                                      shadow-lg rounded-lg`;

export const TableBody = tw.tbody`min-w-full leading-normal`;

export const TableHeader = tw.th`px-5 py-3 
                                border-b-2 border-gray-200 
                                bg-primary-300 text-white text-lg text-center font-semibold  uppercase tracking-wider
                                `;

export const TableData = styled.td`

${tw`px-12 py-5 
     text-lg
     border-b border-gray-300 
     bg-white `}

textarea {
  ${tw`text-blue-900 
  `}
  /* whitespace-no-wrap */
}

`;
