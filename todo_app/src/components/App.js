import React from 'react';
import '../styles/scss/App.scss';

import Header from './header/Header';

function App() {
  return (
    <main className="App">
      <Header name="Bonjour Benjamin" p="Voici toutes les tâches que" p2="vous pouvez réaliser"/>
    </main>
  );
}

export default App;
