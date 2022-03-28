import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
//import amber from '@material-ui/core/colors/amber';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
//import orange from '@material-ui/core/colors/orange';
//import purple from '@material-ui/core/colors/purple';

const tealYellowTheme = createTheme({
  palette: {
    primary: {
	  /* main: teal[500] */
	  /* main: '#e3f6f6' */
	  main: teal[50],
	  contrastText: teal[600],
    },
    secondary: {
	  main: deepOrange[100]
    },
	danger: {
		main: red[100]
	},
	highlighted: {
		main: teal[500],
		contrastText: '#fff',
	},
	/*
	warning: {
		main: purple[100]
	},
	*/
    text: {
	  inverse: teal[50]
    },	
  },
  spacing: 8,  
  typography: {
	button: {
		textTransform: "none",
		':hover': {
		  color: `${deepOrange[500]} !important`,
		  backgroundColor: `${deepOrange[50]} !important`,
		},
	}
  }  
});


ReactDOM.render(
  <StyledEngineProvider injectFirst>
  <ThemeProvider theme={tealYellowTheme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
