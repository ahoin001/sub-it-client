import tw from "twin.macro";
import styled from "styled-components";


export const Container = styled.div`
${tw`flex flex-wrap justify-evenly p-4 overflow-hidden `}

max-width:1800px;
margin:0 auto;

.videoContainer {

    ${tw`my-8 md:my-0`}
    flex-basis: 1 1;
    margin:0 .6rem;
    min-width:300px;
    max-width:400px;
}

`;
