import tw from "twin.macro";
import styled from "styled-components";

export const Article = styled.article`

${tw`
flex flex-col items-center justify-center w-full 
bg-gray-400

overflow-hidden 
rounded-lg shadow-lg
hover:bg-primary-100
hocus:text-white focus:shadow-outline  transition duration-300
`}

/* max-width: 420px; */

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

.p {
  ${tw`text-gray-700 text-sm`}
}

`;



export const Header = styled.header`
${tw`
flex flex-col items-center justify-center w-full 
pb-6
text-primary-500 font-bold leading-tight
focus:shadow-outline transition duration-75
hocus:text-white focus:shadow-outline  transition duration-300

`}

/* resize: both;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden; */


/* hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline  transition duration-300 */
h1 {
  ${tw`text-2xl font-bold `}
}

a {
  ${tw`no-underline hover:underline text-black`}
}

p {
  ${tw`text-lg text-gray-700`}
}
`;