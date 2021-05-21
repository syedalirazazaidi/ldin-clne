import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
function Sidebar() {
  function Tags(name: String) {
    return (
      <Func>
        <p>{name}</p>
      </Func>
    );
  }
  //
  return (
    <SidebarContainer>
      <Wrap>
        <img src="/images/back.jpg" alt="" />
        <HeaderAvatar />
        <h2>ali raza</h2>
        <p>MERN developer / JAMStack developer</p>
      </Wrap>
      <BioWrap>
        <ConWrap>
          <p>Who viewed you</p>
          <p style={{ color: "#0a66c2", fontWeight: "bold" }}>2543</p>
        </ConWrap>
        <ConWrap>
          <p>View on Posts</p>
          <p style={{ color: "#0a66c2", fontWeight: "bold" }}>2448</p>
        </ConWrap>
      </BioWrap>
      {/* <RecentWrap> */}
      <RecentTag>
        <h3>Recents</h3>
        {Tags("#react")}
        <br />
        {Tags("#JAMStack")}
        <br />
        {Tags("#MERN")}
      </RecentTag>
      {/* </RecentWrap> */}
    </SidebarContainer>
  );
}

export default Sidebar;

const RecentWrap = styled.div``;
const RecentTag = styled.div`
  text-align: left;

  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;
const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;
const ConWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  > p {
    color: gray;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Func = styled.div`
  margin: 2px;
  > p {
    font-size: 15px;
    padding: 5px;
    font-weight: bolder;
    color: gray;
  }
  :hover {
    cursor: pointer;
    background-color: whitesmoke;

    border-radius: 10px;
    color: black;
  }
`;
const BioWrap = styled.div`
  padding: 7px;
  margin-bottom: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  h3 {
    margin-left: 74px;
    margin-top: 10px;
    padding: 10px;
  }
  > p {
    margin-left: 5px;
    font-size: 0.9rem;
    line-height: 1.33333;
    padding: 10px;
  }
`;
const WrapBio = styled.div`
  border-bottom: 1px solid gray;
  > h3 {
    font-size: 1.1rem;
    line-height: 1.5;
    align-items: center;
    font-weight: 600;
  }
`;
const WrapHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
  background-color: white;
  img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
  p {
    margin: 6px;
    color: gray;
    font-size: 12px;
  }
  h2 {
    font-size: 18px;
  }
`;
const WrapAva = styled.div``;
const HeaderAvatar = styled(Avatar)`
  margin-bottom: 10px;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const SidebarContainer = styled.div`
  position: sticky;
  top: 90;
  margin-top: 20px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;
