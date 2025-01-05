import React from 'react';
import FlipCard from './FlipCard';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <FlipCard
          frontContent={
            <div>
              <h2>Flip the card</h2>
              <p>to watch content</p>
            </div>
          }
          backContent={
            <div>
              <img src="/image/s1.jpg" alt="img" />
              <h2>Image</h2>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default App;

