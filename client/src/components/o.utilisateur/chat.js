import React, {Component , useState , useEffect} from 'react'
import {Launcher} from 'react-chat-window'
import io from "socket.io-client";
let socket ; 


function App({id ,name ,pic, Chat}) {

   const [messageList, setMessageList] = useState([])
   const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    socket =  io('http://localhost:3001', { transports : ['websocket'] });
    fetch(`http://localhost:3001/chat/messageEmployee/${id}` ,{
        method : "get" ,
        headers: {
            "Content-Type":"application/json" ,
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    }).then(res => res.json())
    .then(data =>{
      setMessageList(data.messages)
    })
    
  }, [])


  console.log(Chat)

  function _onMessageWasSent(message) {
    message.sender = user._id
    socket.emit('chatroomMessage', {
      chatroomId :Chat,
      message: message,
    });
    fetch(`http://localhost:3001/chat/messageEmployee/${id}` ,{
      method : "put" ,
      headers:{
        "Content-Type":"application/json" ,
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body:JSON.stringify({
          message ,
      })
    }).then(res => res.json())
    //setMessageList(old=>[...old,message])
  }
  useEffect(() => {
      socket.on("newMessage", (message) => {
    
      console.log(message)
      if(message.message.sender.toString() !== user._id.toString())
      {
        message.message.author = "them"     
      }
        const newMessages = [...messageList, message.message];
        setMessageList(newMessages);
    });
  }, [messageList])

  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId :Chat ,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId :Chat,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

    return (<div>
      <Launcher
        agentProfile={{
          teamName: name,
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={(e)=>_onMessageWasSent(e)}
        messageList={messageList}
        showEmoji
      />
    </div>)
  }
export default App