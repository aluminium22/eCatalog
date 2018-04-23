import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/Home';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
              main:'#0059a3',
              light: '#82abcd',
              },
    secondary: {
              main:'#70747f',
              },
  },
  status: {
    danger: 'red',
  },
}
);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
