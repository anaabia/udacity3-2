import React from 'react';
import './App.css';

const conversation = props => {
  	return (
    	  <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.user.username}</div>

            <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={props.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
    );
};
export default conversation;