import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
    // Lakukan sesuatu dengan nama buah yang dipilih
    console.log(`Anda memilih buah: ${fruit}`);

  };

  return (
    <div className="body">
      <Table judul="Data Buah" onSelectFruit={handleFruitSelect} />
    </div>
  );
}

export default App;