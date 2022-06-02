import React from "react";
import { Message } from "./message";

export class MessagesPanel extends React.Component {
  render() {
    let list = (
      <div className="no-content-message">There are no messages to show</div>
    );
    if (this.props.channel && this.props.channel.messages) {
      list = this.props.channel.messages.map((m) => (
        <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />
      ));
    }
    return (
      <div className="messages-panel">
        <div className="meesages-list">{list}</div>
        {this.props.channel && (
          <div className="messages-input">
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.input_value}
            />
            <button onClick={this.send}>Send</button>
          </div>
        )}
      </div>
    );
  }
}
