import React from "react";
import styled from "styled-components";
interface FeedProps {
  title: string;
  Icon?: any;
  color: string;
}
function FeedOptionIcon({ title, Icon, color }: FeedProps) {
  // console.log(title, Icon);
  return (
    <HeaderWrap>
      {Icon && (
        <IconWrap>
          <Icon style={{ color: color }} />
          <h3>{title}</h3>
        </IconWrap>
      )}
    </HeaderWrap>
  );
}

export default FeedOptionIcon;
const HeaderWrap = styled.div``;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  cursor: pointer;
  > h3 {
    margin-left: 10px;
  }
  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
  }
`;
