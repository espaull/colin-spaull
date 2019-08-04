import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [testData, setTestData] = useState(null);

  const fetchData = async () => {
    try {
      const apiResponse = await axios.get('/api/test');
      setTestData(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {testData && <h1>{testData}</h1>}
      </header>
    </div>
  );
}

export default App;
