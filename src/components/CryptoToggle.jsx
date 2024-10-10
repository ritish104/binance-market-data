import React from 'react';

const CryptoToggle = ({ selectedSymbol, setSelectedSymbol }) => {
  const symbols = ['ethusdt', 'bnbusdt', 'dotusdt'];

  return (
    <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
      {symbols.map((symbol) => (
        <option key={symbol} value={symbol}>
          {symbol.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default CryptoToggle;
