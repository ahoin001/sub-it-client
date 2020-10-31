
// import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

export const BackDrop = styled.div`
  
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

`;

export const ModalContainer = styled.div`
  
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

  /* min-width:600px; */

${tw`p-8 
     text-xl
     border-b border-gray-300 rounded-md
     bg-white 
     w-1/2
     max-w-lg
     `}

`

// export const OGModalContainer = tw.div`h-auto w-11/12 md:w-1/2 
//                                      bg-pink-800
//                                      p-5  
//                                      shadow-2xl
//                                      bg-red-300 rounded-md`;

export const Modal = tw.div`flex flex-col w-full h-auto`;


export const ModalHeader = tw.div`flex w-full h-auto justify-center items-center`;

export const ModalHeaderTitle = tw.div`flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold`;

export const ModalContent = tw.textarea`w-full h-auto 
                                        p-4 mb-4
                                        bg-gray-200 
                                        text-black font-bold
                                        rounded text-center `;