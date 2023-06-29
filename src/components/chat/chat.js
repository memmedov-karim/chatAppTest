import React from "react";
import "./chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
export default function Chat({submitMessage,getMessage,message,messagesData,owner}) {
  return (
    <div class="chat-container">
        
      {/* <div className="cnt1"> */}
        <ScrollToBottom className="cnt">
      {messagesData?.map((val,ind)=>{
            return(
                <div class= {val.owner === owner ? "message sent-message" : "message received-message"}>
                    <p class="message-name">{val.owner}</p>
                    <p class="message-content">{val.msg}</p>
                </div>
            )
        })}
        </ScrollToBottom>
      {/* </div> */}

      <form onSubmit={submitMessage} class="new-message-form">
        <input
          onChange={getMessage}
          value={message}
          type="text"
          class="message-input"
          placeholder="Type your message"
        />
        <button type="submit" class="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
