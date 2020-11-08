import { Container as ContainerBase } from "../../../treeponents/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled(ContainerBase)`

${tw`flex justify-center
     bg-primary-900 text-white font-medium
     min-h-screen`}

`;

export const ContentContainer = styled.div`
                    
     display:grid;
     justify-items: center; 
     gap:3em;
     grid-template-columns: repeat(auto-fit, minmax(300px, .25fr));
     grid-auto-rows:max-content;     

     ${tw`
          w-11/12 
          p-16 my-8
          text-gray-900
          bg-white
          shadow
          rounded-lg `}               
                              
          @media (max-width: 1226px) {
                justify-content: center;   
          }

`;

