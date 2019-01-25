import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conversation from './conversation.js';
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  
  state = {
    messages:  [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  };
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
		  <Conversation user={users[0]} messages={this.state.messages} isDisabled={this.isDisabled}/>
          <Conversation user={users[1]} messages={this.state.messages} isDisabled={this.isDisabled}/>
        </div>
      </div>
    );
  }
}

export default App;
