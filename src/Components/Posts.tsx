import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
interface PropsTypes {
  // Icon: any;
  // color: string;
  // fontSize?: string;
  // title: string;
  name: string;
  description: string;
  message: string;
}
function Posts({ name, description, message }: PropsTypes) {
  return (
    <WrapContainer>
      <IconWrap>
        {message}
        {/* <ThumbUpAltIcon />
        <CommentIcon />
        <ShareIcon />
        <SendIcon /> */}
      </IconWrap>
      {/* {Icon && (
        <IconWrap>
          <Icon style={{ color: color, fontSize: fontSize }} />
          <p>{title}</p>
        </IconWrap>
      )} */}
    </WrapContainer>
  );
}

export default Posts;
const WrapContainer = styled.div``;
const IconCont = styled.div``;
const IconWrap = styled.div`
  display: flex;
`;
