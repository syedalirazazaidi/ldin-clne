import React from "react";
import styled from "styled-components";
import FeedOptionIcon from "./FeedOption";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import { Avatar } from "@material-ui/core";
function Feed() {
  return (
    <FeedContainer>
      <FeedWrap>
        <FromWrap>
          <HeaderAvatar />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
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
    </FeedContainer>
  );
}

export default Feed;
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
