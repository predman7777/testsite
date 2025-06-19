import React, { useEffect } from 'react';
import app from './firebase';

function App() {
  useEffect(() => {
    console.log('Firebase App Name:', app.name); // should be '[DEFAULT]'
  }, []);

  return (
    <div className="App">
      <h1>Hello Firebase!</h1>
    </div>
  );
}

export default App;
