import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { Launcher } from 'react-chat-window'
import io from "socket.io-client";
let socket;


function App({ id, name, pic, Chat }) {

  const [messageList, setMessageList] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    socket = io('http://localhost:3001', { transports: ['websocket'] });
    fetch(`http://localhost:3001/chat/messageAdmin/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(data => {
        setMessageList(data.messages)
      })

  }, [])



  function _onMessageWasSent(message) {
    message.sender = user._id
    socket.emit('chatroomMessage', {
      chatroomId: Chat,
      message: message,
    });
    fetch(`http://localhost:3001/chat/messageAdmin/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        message,
      })
    }).then(res => res.json())
    //setMessageList(old=>[...old,message])
  }
  useEffect(() => {
    socket.on("newMessage", (message) => {


      if (message.message.sender.toString() !== user._id.toString()) {
        message.message.author = "them"
      }
      const newMessages = [...messageList, message.message];
      setMessageList(newMessages);
    });
  }, [messageList])

  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId: Chat,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId: Chat,
        });
      }
    };
    //eslint-disable-next-line
  }, []);
  function onFilesSelected(file) {
    let formData = new FormData()
    


    const objectURL = window.URL.createObjectURL(file[0]);

    const message = {
      type: 'file', author: 'me',
      data: {
        url: objectURL,
        fileName: file[0].name
      }
    }
    message.sender = user._id
    message.data.url=`http://localhost:3000/uploads/messages/${message.data.fileName}`


    
    socket.emit('chatroomMessage', {
      chatroomId: Chat,
      message: message,
    });
    formData.append("type",file)
    formData.append('file', file[0])
    formData.append('message',JSON.stringify(message))
    axios.put(`http://localhost:3001/chat/messageAdmin/${id}`, formData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }
    )
  }


  if (!Chat) {
    return ""
  }

  return (<div style={{textAlign:"left"}}>
    <Launcher
      agentProfile={{
        teamName: name,
        imageUrl: 'http://localhost:3000/m.png'
      }}
      onMessageWasSent={(e) => _onMessageWasSent(e)}
      messageList={messageList}
      showEmoji
      onFilesSelected={onFilesSelected}
    />
  </div>)
}
export default App