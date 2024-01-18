import io from "socket.io-client";
import { useCallback, useEffect, useState, useMemo } from "react";
import React from "react";
import "../styles/chat.css";
import Chat from "./Chat";
import Notice from "./Notice";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function ConsultPage() {
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userIdInput, setUserIdInput] = useState("");
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState("");
  const [roomIdInput, setRoomIdInput] = useState("");

  const initSocketConnect = () => {
    console.log(socket.connect);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput, roomId: roomIdInput });
    setUserId(userIdInput);
  };

  const disconnect = () => {
    socket.emit("leave", { userId: userId, roomId: roomIdInput });
    setUserId(null);
  };

  const checkIsEnter = (e) => {
    if (e.key == "Enter") {
      entryChat();
    }
  };

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      sendMsg();
    }
  };
  const userListOptions = useMemo(() => {
    const options = [];
    for (const key in userList) {
      if (userList[key] === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content =
        res.userId === userId ? `${res.msg}` : `${res.userId}: ${res.msg}`;
      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [
        ...chatList,
        // 내가 보내는 메세지는 내 이름이 안 보이게 해라 ~!~!
        { type: "notice", content: `${res.msg}` },
      ];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  // 메세지 보내기
  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput("");
    } else {
      alert("메세지 채우세요");
    }
  };

  return (
    <>
      {userId ? (
        <>
          <div>{userId}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              onKeyDown={handleEnter}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <form onKeyDown={checkIsEnter}>
          {/* <div className="input-container"> */}
          방번호
          <input
            type="text"
            value={roomIdInput}
            onChange={(e) => setRoomIdInput(e.target.value)}
          />
          닉네임
          <input
            type="text"
            value={userIdInput}
            onChange={(e) => setUserIdInput(e.target.value)}
          />
          <button onClick={entryChat}>입장</button>
          {/* </div> */}
        </form>
      )}
    </>
  );
}
