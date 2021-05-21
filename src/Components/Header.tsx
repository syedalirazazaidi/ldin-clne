import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <Wrap>
      <WrapLeft>
        <img src="/images/linkedin.png" alt="" />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </HeaderSearch>
      </WrapLeft>

      <IconWrap>
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messages" Icon={MessageIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption avatar="/images/mypic.jpg" title="me" />
      </IconWrap>
    </Wrap>
  );
}

export default Header;
const HeaderSearch = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-radius: 5px;
  height: 22px;

  color: gray;
  background-color: #eef3f8;
  > input {
    outline: none;
    border: none;
    background: none;
  }
`;
const Icon = styled.div`
  text-align: center;
  :hover {
    color: gray;
  }
  > p {
    color: gray;
  }
`;
const WrapLeft = styled.div`
  flex: 0.3;
  padding: 5px;
  display: flex;

  > img {
    height: 40px;
    object-fit: contain;
    margin-right: 10px;
  }
  > input {
    border: none;
    box-shadow: none;
    outline: none;
    width: 100%;
    height: 32px;

    background-color: #e1e9ee;
  }
`;

const Wrap = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 999;
  width: 100%;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  padding: 5px;
  cursor: pointer;
  align-items: center;

  margin-left: 50px; /* display: flex;
  justify-content: space-between; */
  > img {
    border-radius: 50px;
    object-fit: contain;
  }
`;
