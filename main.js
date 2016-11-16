import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import MyAwesomeReactComponent from './moudle/MyAwesomeReactComponent';
import Drawer from './moudle/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const App = () => (
  <MuiThemeProvider>
    <Drawer />
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('app')
);