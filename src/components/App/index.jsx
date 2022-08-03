import React from 'react';
import './App.css';
import GridView from '../GridView';
// Insert Location 7
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GridView />
      </header>
    </div>
  );
}

// Insert Location 8
export default withAuthenticator(App);
