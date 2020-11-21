import tw from "twin.macro";
import styled from "styled-components";

export const Article = styled.article`

${tw`
flex flex-col items-center justify-center w-full 
bg-gray-100

overflow-hidden 
rounded-lg shadow-lg
hover:bg-primary-100
hocus:text-white focus:shadow-outline  transition duration-300
`}

/* max-height: 275px; */

video {
  /* ${tw` 
  p-2
  w-full 
  border-2
  border-primary-500
        `}; */
  /* max-height:14em; */
}

h1 {
  ${tw`p-4 text-4xl hocus:text-white`} 
}

.a {
  ${tw`no-underline hover:underline text-black`}
}

p {
  ${tw`text-gray-700 text-sm hover:text-white`}
}

`;



export const Header = styled.header`
${tw`
flex flex-col items-center justify-center
pb-6
text-primary-500 text-center font-bold leading-tight
focus:shadow-outline transition duration-75
hocus:text-white focus:shadow-outline  transition duration-300

`}

h1 {
  ${tw`text-2xl font-bold `}
  
  width:320px;
  display: inline-block;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;  

}

a {
  ${tw`no-underline hover:underline text-black`}
}

p {
  ${tw`text-lg text-gray-700`}
}
`;