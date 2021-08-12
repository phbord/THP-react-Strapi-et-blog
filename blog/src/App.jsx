import React, { useEffect } from 'react';
import 'bootstrap';

function App() {
  React.useEffect(
    () => {
      fetch('http://localhost:1337/articles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then(data => console.log(data));
    },
    []
  )

  return (
    <div className="App">
    </div>
  );
}

export default App;
