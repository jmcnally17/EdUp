import React from "react";
import { ChannelList } from "./channelList";
import { MessagesPanel } from "./messagesPanel";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/chat/getChannels`;
} else {
  url = "http://localhost:9000/backend/chat/getChannels";
}

export default class Chat extends React.Component {
  state = {
    channels: [{ id: 1, name: "first", participants: 10 }],
  };

  componentDidMount() {
    this.loadChannels();
  }

  loadChannels = async () => {
    fetch(url).then(async (response) => {
      let data = await response.json();
      this.setState({ channels: data.channels });
    });
  };

  render() {
    return (
      <div className="chat-app">
        <ChannelList
          channels={this.state.channels}
          onSelectChannel={this.handleChannelSelect}
        />
        <MessagesPanel />
      </div>
    );
  }
}
