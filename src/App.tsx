import React from 'react';

import PageOverview from './components/PageOverview';
import Intents from './components/Intents';

import './App.css';

/* future */
const App: React.FC = (): React.ReactElement => {
  return (
    <main className="App">
      <PageOverview />
      <Intents />
    </main>
  );
}

export default App;