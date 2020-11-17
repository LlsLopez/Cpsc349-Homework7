let socket;

function init(url)  {
    socket = new WebSocket(url);
    console.log('connecting...');
  }


  export default {
    init,
    registerOpenHandler,
    registerMessageHandler,
    sendMessage
  }

  function registerOpenHandler(handlerFunction) {
    socket.onopen = () => {
      console.log('open');
      handlerFunction();
    };
  }

  function registerMessageHandler(handlerFunction) {
    socket.onmessage = (e) => {
      console.log('message', e.data);
      let data = JSON.parse(e.data);
      handlerFunction(data);
    };
  }

  function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
  }