export const connectToWebSocket = (symbol, interval, onMessage) => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`);
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.k) {
        onMessage(message.k);
      }
    };
    
    return ws;
  };
  