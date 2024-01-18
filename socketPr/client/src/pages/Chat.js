import styled from "styled-components";

export default function Chat({ chat }) {
  return (
    <>
      <div className={`list ${chat.type}-chat`}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}
