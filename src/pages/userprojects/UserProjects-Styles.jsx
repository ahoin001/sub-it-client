import { Container as ContainerBase } from "../../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";

export const Container = tw.div`container my-12 mx-auto px-4 md:px-12`;

export const FlexContainer = tw.div`flex flex-wrap -mx-1 lg:-mx-4`;

export const Column = tw.div`my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3`;

// export const Article = tw.article`overflow-hidden rounded-lg shadow-lg`;
export const Article = styled.article`
${tw`flex flex-col items-center justify-center overflow-hidden w-full h-full rounded-lg shadow-lg`}

video {
  ${tw`block h-auto w-full`}
}
.a {
  ${tw`no-underline hover:underline text-black`}
}
.p {
  ${tw`text-gray-700 text-sm`}
}
`;



export const Header = styled.header`
${tw`flex flex-col items-center justify-center leading-tight  md:p-2`}

h1 {
  ${tw`text-lg`}
}

a {
  ${tw`no-underline hover:underline text-black`}
}

p {
  ${tw`text-gray-700 text-sm`}
}
`;

export const Footer = styled.footer`
${tw`flex items-center justify-between leading-none p-2 md:p-4`}

.h1 {
  ${tw`text-lg`}
}
.a {
  ${tw`flex items-center no-underline hover:underline text-black`}
}
.p {
  ${tw`text-gray-700 text-sm`}
}
`;

// export const SocialButton = styled.a`
//   ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
//   .iconContainer {
//     ${tw`bg-white p-2 rounded-full`}
//   }
//   .icon {
//     ${tw`w-4`}
//   }
//   .text {
//     ${tw`ml-4`}
//   }
// `;

export const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;