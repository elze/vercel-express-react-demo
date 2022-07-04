import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import cyan from '@material-ui/core/colors/cyan';

import utils from './Utils';

const secondaryButtonTheme = createTheme({
  palette: {
	color_02: {
		main: cyan[50],
		contrastText: cyan[500],
	},
	color_04: {
		main: cyan[100],
		contrastText: cyan[500],
	},
	color_06: {
		main: cyan[200],
		contrastText: cyan[500],
	},
	color_08: {
		main: cyan[300],
		contrastText: cyan[50],
	},
	color_10: {
		main: cyan[400],
		contrastText: cyan[50],
	}
  },
  spacing: 4,
  typography: {
	button: {
		textTransform: "none"
	}
  }    
});


export function SkillCategory({ primarySkill, category }) {	
	return (
	<ThemeProvider theme={secondaryButtonTheme}>
	<Button variant="contained" color={utils.getButtonClass(category.filesAndPhrases?.length)} 
			sx={{ m: 1, p: category.filesAndPhrases ? category.filesAndPhrases.length : 1}} 
	>
	  { category.categoryName }&nbsp; 
	  <Chip label={category.filesAndPhrases?.length} size="small" />
	</Button>
	</ThemeProvider>
	);
}

