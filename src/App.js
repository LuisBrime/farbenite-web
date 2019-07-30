import React from 'react';
import { Grommet } from 'grommet';

import { theme } from './theme';
import Page from './components/Page';

function App() {
  return (
    <Grommet theme={theme} full>
      <Page />
    </Grommet>
  );
}

export default App;
