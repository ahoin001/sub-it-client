// **** NAV
import tw from "twin.macro";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../../treeponents/headers/light";

export const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none bg-gray-400`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;