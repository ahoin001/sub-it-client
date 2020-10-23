import tw from "twin.macro";
import styled from "styled-components";

export const SubtitleTable = tw.table`block overflow-x-auto table-fixed leading-normal 
                                      mt-6 
                                      antialiased font-sans font-bold
                                      shadow-xl border-2 rounded-lg`;

// bg-red-700

export const TableBody = tw.tbody`w-full 
                                  leading-normal`;

export const TableHeader = tw.th`px-5 py-3 w-full
                                border-b-2 border-gray-200 
                                bg-primary-300 text-white text-lg text-center font-semibold  uppercase tracking-wider
                                `;

export const TableData = styled.td`

${tw`px-12 py-5 
     text-lg
     border-b border-gray-300 
     bg-white
     
     `}

textarea {
  ${tw`text-blue-900 font-semibold
  `}
}

`;
