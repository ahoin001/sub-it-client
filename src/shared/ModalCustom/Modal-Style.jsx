
// import { motion } from "framer-motion";
import tw from "twin.macro";
// import styled from "styled-components";

export const ModalContainer = tw.div`h-auto w-11/12 md:w-1/2 
                                     p-5  
                                     shadow-lg
                                     bg-white rounded-md`;

export const Modal = tw.div`flex flex-col w-full h-auto`;


export const ModalHeader = tw.div`flex w-full h-auto justify-center items-center`;

export const ModalHeaderTitle = tw.div`flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold`;

export const ModalContent = tw.div`flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500`;