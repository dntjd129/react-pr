import styled from "styled-components";

const ChatBox = styled.div`
  text-align: ${(props) => (props.type ? "left" : "right")};
  div {
    display: inline-block;
    padding: 2px 10px;
    background-color: white;
    box-shadow: 0px 0px 3px #444;
    border-radius: 10px;
    margin-bottom: 8px;
    /* border: 1px solid black; */
  }
`;

export default function Chat({ chat }) {
  return (
    <>
      <ChatBox isAdmin={chat.type}>
        <div>{chat.content}</div>
      </ChatBox>
    </>
  );
}
