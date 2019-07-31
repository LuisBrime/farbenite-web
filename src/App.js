import React from 'react';
import { Router } from './Router';
import { Grommet } from 'grommet';

import { theme } from './theme';
import Routerino from './components/Routerino';

function App() {
  return (
    <Router>
      <Grommet theme={theme} full>
        <Routerino />
      </Grommet>
    </Router>
  );
}

export default App;
