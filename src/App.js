import React from 'react';

import './styles/overwrite.css';

import QuoteBox from './components/QuoteBox.js';

function App() {
  return(
    <div className="App bg-dark" id="app">
        <QuoteBox />
    </div>
  )
}

export default App;
