import React, { PureComponent } from 'react';

// Route
import AppRouterOutlet from '../Routes/App.routes';

class App extends PureComponent {
  render() {
    return (
      <AppRouterOutlet />
    );
  }
}

export default App;
