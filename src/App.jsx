import React, { useEffect, useState, useRef } from 'react';
import { connectToWebSocket } from './utils/binanceWebSocket';
import CryptoToggle from './components/CryptoToggle';
import Chart from './components/Chart';
import './App.css';

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('ethusdt');
  const [chartData, setChartData] = useState([]);
  const [interval, setInterval] = useState('1m');
  const wsRef = useRef(null);

  useEffect(() => {
    if (wsRef.current) wsRef.current.close(); 

    wsRef.current = connectToWebSocket(selectedSymbol, interval, (data) => {
      setChartData((prevData) => [...prevData, data]);
    });

    return () => {
      if (wsRef.current) wsRef.current.close();
    };
  }, [selectedSymbol, interval]);

  return (
    <div className="app-container">
      <h1>Binance Market Data</h1>
      <CryptoToggle selectedSymbol={selectedSymbol} setSelectedSymbol={setSelectedSymbol} />
      <select value={interval} onChange={(e) => setInterval(e.target.value)}>
        <option value="1m">1 Minute</option>
        <option value="3m">3 Minutes</option>
        <option value="5m">5 Minutes</option>
      </select>
      <Chart chartData={chartData} />
    </div>
  );
};

export default App;
