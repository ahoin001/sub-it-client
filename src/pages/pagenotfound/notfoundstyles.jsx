import { Container as ContainerBase } from "../../treeponents/misc/Layouts";
import tw from "twin.macro";
import { Link } from 'react-router-dom'
import styled from "styled-components";




export const Container = styled.div`

 ${tw`min-h-screen w-full bg-gray-100 flex items-center`}

`;

export const SectionContainer = tw.div` flex flex-col md:flex-row items-center justify-center
                              
                              bg-blue-200 text-gray-900
                              max-w-screen-xl 
                              `;
                            //   sm:mx-20 sm:my-16  shadow sm:rounded-lg 

export const LeftContent = tw.div`max-w-md`;

export const Header = tw.h1`text-5xl  font-bold`; 
// font-dark

export const Text = tw.h1`text-2xl mb-4 md:text-3xl font-light leading-normal`;

// export const LogoImage = tw.img`h-12 mx-auto`;

export const CatContainer = tw.div`max-w-lg`;

export const RightContainer = tw.div`max-w-lg`;

export const RedirectLink = tw(Link)`px-4 mt-8 inline py-2 text-xl font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow bg-blue-600 active:bg-blue-600 hover:bg-blue-700`;
