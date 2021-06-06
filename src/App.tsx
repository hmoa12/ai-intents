import React from 'react';

import PageOverview from './components/PageOverview';
import Intents from './components/Intents';

import './App.css';

/* todo - We can have a header component over here, in which we can lay down different steps for a Client 
for bot creation process. */
const App: React.FC = (): React.ReactElement => {
  return (
    <main className="App">
      <PageOverview />
      <Intents />
    </main>
  );
}

export default App;