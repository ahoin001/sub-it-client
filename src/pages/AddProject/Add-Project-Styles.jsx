import tw from "twin.macro";
import styled from "styled-components";

export const Form = styled.form`${tw`mx-auto `}

/* So we can create a custom file upload button, hide original input, use lable to click */
.file-input {
  display: none; 
}

.custom-file-upload {
    border: 1px solid #ccc;
    /* display: inline-block; */
    /* padding: 6px 12px; */
    cursor: pointer;
}

.icon {
    ${tw`w-6 h-6 -ml-2`}
  }

.text {
    ${tw`ml-3`}  
  }

`
export const Label = tw.label`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

export const AddButton = styled.label`
${tw`mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
`;


