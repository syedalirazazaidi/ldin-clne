import React from "react";
import styled from "styled-components";
import FeedOptionIcon from "./FeedOption";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { Avatar } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import Posts from "./Posts";
function Feed() {
  // const PostAMessages = (e: ChangeEvent<HTMLSelectElement>) => {
  //   e.preventDefault();
  //   alert("postded");
  // };
  const PostAMessages = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("hi");
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "pppp");
  };
  return (
    <FeedContainer>
      <FeedWrap>
        <FromWrap>
          <HeaderAvatar />
          <form>
            <input type="text" placeholder="Start a post" onChange={onChange} />
            <button type="submit" onClick={() => PostAMessages}>
              Send
            </button>
          </form>
        </FromWrap>
        <IconWrap>
          <FeedOptionIcon title="Photo" Icon={PhotoIcon} color="#70B5F9" />
          <FeedOptionIcon title="Video" Icon={YouTubeIcon} color="#E7A33E" />
          <FeedOptionIcon title="Event" Icon={DateRangeIcon} color="#C0CBCD" />
          <FeedOptionIcon
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </IconWrap>
      </FeedWrap>
      <PostWrap>
        <PostHeader>
          <HeaderAvatarPost />
          <HeadWrap>
            <p>ALI RAZA</p>
            <p>This is a Post</p>
          </HeadWrap>
        </PostHeader>
        <p>this is comment session</p>
        <PostContainer>
          <Posts
            Icon={ThumbUpAltIcon}
            title="like"
            color="#b2b3b5"
            font-size="600"
          />
          <Posts Icon={CommentIcon} title="Comment" color="#b2b3b5" />
          <Posts Icon={ShareIcon} title="Share" color="#b2b3b5" />
          <Posts Icon={SendIcon} title="Send" color="#b2b3b5" />
        </PostContainer>
      </PostWrap>
    </FeedContainer>
  );
}

export default Feed;
const PostHeader = styled.div`
  display: flex;
  padding: 10px;
`;
const PostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const HeaderAvatarPost = styled(Avatar)``;
const PostWrap = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 15px 10px;
  border-radius: 5px;
  > p {
    margin: 5px 20px;
  }
`;
const HeadWrap = styled.div`
  p {
    padding: 2px 15px;
  }
`;
const FromWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: gray;
  padding-left: 15px;
  border: 1px solid lightgray;
  border-radius: 30px;
  > form {
    display: flex;
    width: 100%;
  }
  > form > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
  }
  > form > button {
    display: none;
  }
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 12px;
`;
const FeedWrap = styled.div`
  background-color: white;
  padding-bottom: 20px;
  padding: 14px;

  border-radius: 10px;
  border: 1px solid lightgrey;
`;
const HeaderAvatar = styled(Avatar)`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const FeedContainer = styled.div`
  flex: 0.6;
  margin: 20px 20px;
`;
const FormContainer = styled.div`
  /* 
  > form > input {
    flex: 1;
    height: 20px;
    width: 650px;
    padding: 20px;
    margin: 10px;
    border-radius: 20px;
    border-color: lightgray;
    outline: none;
  }
  > form > button {
    visibility: hidden;
  } */
`;
