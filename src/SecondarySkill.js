import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import clsx from 'clsx';

import utils from './Utils';

const useStyles = makeStyles({
	buttonWithMargin: {
	  marginBottom: '1em',
	  marginLeft: '1em',
	  marginRight: '1em',
	  color: 'DarkCyan',
	  textTransform: 'none',
	},
	color_02: {},
	color_04: {
		backgroundColor: '#ebfafa',
		paddingBottom: '5px',
		paddingTop: '5px'
	},
	color_06: {
		backgroundColor: '#c2f0f0',
		paddingBottom: '10px',
		paddingTop: '10px'		
	},
	color_08: {
		backgroundColor: '#99e6e6',
		paddingBottom: '15px',
		paddingTop: '15px'		
	},
	color_10: {
		backgroundColor: '#70dbdb',
		paddingBottom: '20px',
		paddingTop: '20px'		
	},
	smallerFont: {
		fontSize: 'smaller'
	},	
});

export function SecondarySkill({ primarySkill, secondarySkill }) {	
	const classes = useStyles();
	return (
	<Button variant="outlined" 
	className={clsx(classes.buttonWithMargin, classes[utils.getButtonClass(secondarySkill.ratio)])} >
	  { secondarySkill.secondary_term }&nbsp;
	  <span className={classes.smallerFont}>{secondarySkill.ratio}</span>
	</Button>
	);
}

