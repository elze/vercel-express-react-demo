import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
//import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';

const tealOrangeTheme = createTheme({
  palette: {
    primary: {
	  main: teal[50],
	  contrastText: teal[600],
    },
    secondary: {
	  main: deepOrange[300],
	  contrastText: deepOrange[50]
    },
	/*
	error: {
		main: blue[700]
	},
	*/
	hasManyAssociations: {
		main: teal[100],
		contrastText: teal[600]
	},
	highlighted: {
		main: teal[500],
		contrastText: teal[50],
	},
	secondaryArea: {
		main: indigo[50]
	}
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
  <ThemeProvider theme={tealOrangeTheme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
