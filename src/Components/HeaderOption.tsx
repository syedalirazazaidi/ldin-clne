import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface IconsProps {
  title: string;
  Icon?: any;
  avatar?: string;
}

function HeaderOption({ title, Icon, avatar }: IconsProps) {
  return (
    <HeaderWrap>
      {Icon && (
        <IconWrap>
          <Icon />
        </IconWrap>
      )}
      {avatar && (
        <IconWrap>
          <Avatar src={avatar} />
        </IconWrap>
      )}
      <h3>{title}</h3>
    </HeaderWrap>
  );
}

export default HeaderOption;
const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;
  :hover {
    color: black;
  }
  h3 {
    font-size: 12px;
    font-weight: 400;
  }
`;

const IconWrap = styled.div`
  align-items: center;
  /* .MuiAvatar-img {
    height: 25px !important;
    weight: 25px !important;
    border-radius: 50px;
    object-fit: contain;
  } */
`;
