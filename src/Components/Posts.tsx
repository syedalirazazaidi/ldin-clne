import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
interface PropsTypes {
  Icon: any;
  color: string;
  fontSize?: string;
  title: string;
}
function Posts({ Icon, color, fontSize, title }: PropsTypes) {
  return (
    <WrapContainer>
      {Icon && (
        <IconWrap>
          <Icon style={{ color: color, fontSize: fontSize }} />
          <p>{title}</p>
        </IconWrap>
      )}
    </WrapContainer>
  );
}

export default Posts;
const WrapContainer = styled.div``;
const IconCont = styled.div``;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    padding: 8px;
  }
  :hover {
    color: gray;
  }
`;
