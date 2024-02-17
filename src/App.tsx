import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InventoryStats from './containers/InventoryStats';

function App() {
  const [isUserMode, setUserMode] = useState(false);

  return (
    <div className="App">
      <Header isUserMode={isUserMode} setUserMode={setUserMode}/>
      <InventoryStats isUserMode={isUserMode}/>
    </div>
  );
}

export default App;
