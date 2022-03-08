import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import clsx from 'clsx';

import utils from './Utils';

const useStyles = makeStyles({
	buttonDefault: {
	  marginBottom: '1em',
	  marginLeft: '1em',
	  marginRight: '1em',
	  color: 'DarkCyan',
	  textTransform: 'none',
	},	
	color_02: {
	},
	color_04: {
		backgroundColor: '#ebfafa',
		paddingBottom: '10px',
		paddingTop: '10px',
	},
	color_06: {
		backgroundColor: '#c2f0f0',
		paddingBottom: '15px',
		paddingTop: '15px',
	},
	color_08: {
		backgroundColor: '#99e6e6',
		color: '#ffffff',
		paddingBottom: '20px',
		paddingTop: '20px',
	},
	color_10: {
		backgroundColor: '#70dbdb',
		color: '#ffffff',
		paddingBottom: '25px',
		paddingTop: '25px',	
	},
	smallerFont: {
		fontSize: 'smaller'
	}
});

export function SkillCategory({ primarySkill, category }) {	
	const classes = useStyles();
	return (
	<Button variant="outlined" 
	className={clsx(classes.buttonDefault, classes[utils.getButtonClass(category.filesAndPhrases?.length)])} >
	  { category.categoryName }&nbsp;
	  <span className={classes.smallerFont}>{category.filesAndPhrases?.length}</span>
	</Button>
	);
}

