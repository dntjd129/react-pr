import styled from "styled-components";

const ChatBox = styled.span`
  padding: 2px 10px;
`;

export default function Chat({ chat }) {
  return (
    <>
      <div>
        <ChatBox type={chat.type}>{chat.content}</ChatBox>
      </div>
    </>
  );
}
