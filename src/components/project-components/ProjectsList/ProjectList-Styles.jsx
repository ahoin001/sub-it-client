import tw from "twin.macro";
import styled from "styled-components";


export const Container = styled.div`
${tw`flex flex-wrap justify-evenly 
     p-4 mx-auto
     w-full
     overflow-hidden `}

.videoContainer {

    ${tw`my-8 
         w-3/12
         md:my-0`}
    flex-basis: 1 1;
    margin:0 .6rem;
    min-width:300px;
    max-width:400px;
}

`;
