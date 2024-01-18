import io from "socket.io-client";
import { useCallback, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import Chat from "../components/Chat/Chat";

const ChatModalBox = styled.div`
  width: 320px;
  min-height: 500px;
  background-color: white;
  padding: 15px 15px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 4px #444;
  position: relative;
  left: 50px;
  top: 10px;
`;

const CsBox = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
  box-shadow: 0px 0px 2px #444;
  /* border: 1px solid black; */
  border-radius: 20px;
  h4 {
    text-align: center;
  }
`;

const CsTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
  height: 90px;
  background-color: #e0e0e0;
  border-radius: 15px;
  input {
    height: 60%;
    border: none;
    background-color: #e0e0e0;
  }
  h2 {
    cursor: pointer;
  }
`;

const socket = io.connect("http://localhost:8000", { autoConnect: false });
function ChatPage() {
  const [modalChat, setModalChat] = useState(false);
  const [isChatStart, setisChatStart] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [textChat, setTextChat] = useState("");
  const userId = "admin";

  // 소켓 연결
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  // 메세지 작성
  const sendMsg = () => {
    if (textChat !== "") {
      socket.emit("sendMsg", { userId: userId, msg: textChat });
      setTextChat("");
    } else {
      alert("메세지를 입력해주세요");
    }
  };

  // 채팅 리스트 업데이트
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? false : true;
      // const isAdmin = res.userId === userId ? false : true;
      console.log("res.userID", res.userId);
      console.log("userId", userId);
      // console.log("isAdmin", isAdmin);
      const content = `${res.msg}`;
      const newChatList = [...chatList, { type: false, content: content }];
      setChatList(newChatList);
    },
    [chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  // 상담 시작
  const entryChat = () => {
    console.log("상담 시작");
    initSocketConnect();
    socket.emit("entry", { userId: userId, userNumber: 1 });
    // 토큰에 ? 존재하는 해당 유저의 id, userNumber를 보내는 코드 필요
    // 서버에서 join에 userNumber or userId를 사용하여 방을 만들어주어야 함
  };

  // 상담종료
  // const disconnectChat = () => {
  //   console.log("상담 종료");
  //   socket.emit("disconnect", { userId: userId, userNumber: 1 });
  // };

  return (
    <>
      <h4>상담사</h4>
      {modalChat ? (
        <div>
          <button onClick={() => setModalChat(!modalChat)}>없어져라</button>
          <ChatModalBox>
            {isChatStart ? (
              <>
                <CsBox>
                  <h4>상담이 시작되었습니다</h4>
                  <br />
                  {chatList.map((chat, i) => {
                    return <Chat key={i} chat={chat} />;
                  })}
                </CsBox>
                <CsTextBox>
                  <input
                    type="text"
                    value={textChat}
                    onChange={(e) => {
                      setTextChat(e.target.value);
                    }}
                  />
                  <button onClick={sendMsg}>전송</button>
                  <br />
                  <button
                    onClick={() => {
                      setisChatStart(!isChatStart);
                      // disconnectChat();
                    }}
                  >
                    상담 종료
                  </button>
                </CsTextBox>
              </>
            ) : (
              <>
                <CsBox>
                  <h4>상담을 시작해주세요</h4>
                </CsBox>
                <CsTextBox>
                  <h2
                    onClick={() => {
                      setisChatStart(!isChatStart);
                      entryChat();
                    }}
                  >
                    상담 시작
                  </h2>
                </CsTextBox>
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

export default ChatPage;
