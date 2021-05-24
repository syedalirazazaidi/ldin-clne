import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

import FeedOptionIcon from "./FeedOption";
interface PropsTypes {
  name: string;
  description: string;
  message: string;
}
function Posts({ name, description, message }: PropsTypes) {
  return (
    <WrapContainer>
      <IconWrap>
        <PostHeader>
          <HeaderAvatarPost />
          <HeadWrap>
            <p>ALI RAZA</p>
            <p>This is a Post</p>
          </HeadWrap>
        </PostHeader>
      </IconWrap>
      <MessageBody>
        <p>{message}</p>
      </MessageBody>
      <PostBottom>
        <FeedOptionIcon title="like" Icon={ThumbUpAltIcon} color="#b2b3b5" />
        <FeedOptionIcon title="Comment" Icon={CommentIcon} color="#b2b3b5" />
        <FeedOptionIcon title="Event" Icon={ShareIcon} color="#b2b3b5" />
        <FeedOptionIcon title="Send" Icon={SendIcon} color="#b2b3b5" />
      </PostBottom>
    </WrapContainer>
  );
}

export default Posts;
const MessageBody = styled.div`
  padding-left: 15px;
`;

const PostBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const PostHeader = styled.div`
  display: flex;
  padding: 10px;
`;
const HeadWrap = styled.div`
  p {
    padding: 2px 15px;
  }
`;

const HeaderAvatarPost = styled(Avatar)``;
const WrapContainer = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
`;
const IconCont = styled.div``;
const IconWrap = styled.div`
  display: flex;
`;
