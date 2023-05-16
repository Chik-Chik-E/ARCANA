import React from 'react';

class App extends React.Component {
  ws: any;

  componentDidMount() {
    this.ws = new WebSocket('ws://k8d107.p.ssafy.io:18081/ws'); // 아까 서버에서 1234 port로 했으니 이런식으로
    this.ws.onopen = () => {
      // 연결!
      console.log('connected!!');
    };
  }

  sendMessage = () => {
    // 화살표함수로 만들것!!
    this.ws.send('hello this is client Message'); // 서버로 메세지 보내는건 send

    this.ws.onmessage = (evt: MessageEvent) => {
      console.log(evt);
      console.log(evt.data);
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.sendMessage}>
            메세지 보내기
          </button>
        </header>
      </div>
    );
  }
}

export default App;