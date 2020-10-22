import tw from "twin.macro";
import styled from "styled-components";

// export const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;

// export const Content = tw.div`py-8`;

// *****

export const SubtitleTable = tw.table`min-w-full table-auto leading-normal   overflow-auto
                                       font-bold`;

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

.text {
    ${tw`text-primary-700 `}
}

p {
  ${tw`text-yellow-900 
  `}
  /* whitespace-no-wrap */
}

textarea {
  ${tw`text-blue-900 
  `}
  /* whitespace-no-wrap */
}

`;