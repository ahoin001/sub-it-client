import tw from "twin.macro";
import styled from "styled-components";

export const Article = styled.article`
${tw`
flex flex-col items-center justify-center w-full 
pt-4 my-6 
max-w-lg
overflow-hidden 
rounded-lg shadow-lg
hover:bg-primary-100
hocus:text-white focus:shadow-outline  transition duration-300
`}



video {
  ${tw`block w-11/12 p-2`}
}

header {
  ${tw`p-4 hocus:text-white`} 
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
text-primary-500 font-bold leading-tight
focus:shadow-outline transition duration-75
md:p-4
`}


/* hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline  transition duration-300 */
h1 {
  ${tw`text-xl font-bold `}
}

a {
  ${tw`no-underline hover:underline text-black`}
}

p {
  ${tw`text-gray-700 text-base`}
}
`;