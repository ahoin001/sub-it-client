import tw from "twin.macro";
import styled from "styled-components";
// import { Content3Xl as ContainerBase } from './treeponents/misc/Layouts'

// export const Container = tw(ContainerBase)`box-border `;

export const Container = styled.div`
max-width:1800px;
${tw`mx-auto h-full
     bg-gray-100`}

@media (min-width: 2300px) {
    ${tw`shadow-2xl`}
  }

`;