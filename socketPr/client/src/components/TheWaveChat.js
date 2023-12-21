import io from "socket.io-client";
import { useCallback, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import Chat from "./Chat/Chat";

const ChatModalBox = styled.div`
  width: 320px;
  min-height: 500px;
  background-color: white;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0px 0px 5px #444;
  position: absolute;
  left: 100px;
  top: 100px;
`;

const CsBox = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
`;

const socket = io.connect("http://localhost:8000", { autoConnect: false });
function TheWaveChat() {
  const [modalChat, setModalChat] = useState(false);
  const [isChatStart, setisChatStart] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [textChat, setTextChat] = useState("");
  const userId = "qwer1234";
  // 소켓 연결
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  // 메세지 작성
  const sendMsg = () => {
    if (textChat !== "") {
      socket.emit("chat");
      setTextChat("");
    } else {
      alert("메세지를 입력해주세요");
    }
  };

  // 채팅 리스트 업데이트
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.userId}: ${res.msg}`;
      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [chatList]
  );

  // 수정

  // 상담 시작
  const entryChat = () => {
    console.log("entryChat정상 동작");
    initSocketConnect();
    socket.emit("entry", { userId: userId, userNumber: 1 });
    // 토큰에 ? 존재하는 해당 유저의 id, userNumber를 보내는 코드 필요
    // 서버에서 join에 userNumber or userId를 사용하여 방을 만들어주어야 함
  };

  return (
    <>
      <h3>socket 과제 과제</h3>
      <br />
      {modalChat ? (
        <div>
          <button onClick={() => setModalChat(!modalChat)}>없어져라</button>
          <ChatModalBox>
            {isChatStart ? (
              <>
                <CsBox>
                  <h4>상담이 시작되었습니다</h4>
                  {chatList.map((chat, i) => {
                    return <Chat key={i} chat={chat} />;
                  })}
                </CsBox>
                <div>
                  <input
                    type="text"
                    value={textChat}
                    onChange={(e) => {
                      setTextChat(e.target.value);
                    }}
                  />
                  <button onClick={sendMsg}>전송</button>
                </div>
                <br />
                <button
                  onClick={() => {
                    setisChatStart(!isChatStart);
                    // initSocketConnect();
                  }}
                >
                  상담 종료
                </button>
              </>
            ) : (
              <>
                <CsBox>
                  <h4>상담을 시작해주세요</h4>
                </CsBox>
                <button
                  onClick={() => {
                    setisChatStart(!isChatStart);
                    entryChat();
                  }}
                >
                  상담 시작
                </button>
              </>
            )}
          </ChatModalBox>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setModalChat(!modalChat);
            }}
          >
            생겨라 채팅창
          </button>
        </div>
      )}
    </>
  );
}

export default TheWaveChat;
