import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import utils from './Utils';

const useStyles = makeStyles({
	buttonWithMargin: {
	  marginBottom: '1em',
	  marginLeft: '1em',
	  marginRight: '1em',
	  color: 'DarkCyan',
	  textTransform: 'none',
	}
});

export function SecondarySkill({ primarySkill, secondarySkill }) {	
	const classes = useStyles();
	return (
	<Button variant="outlined" 
	href= { `/jobsnippets/${secondarySkill.id}/${primarySkill.primary_term}/${secondarySkill.secondary_term}` }
	className={classes.buttonWithMargin + ' ' + utils.getButtonClass(secondarySkill.ratio)} >
	  { secondarySkill.secondary_term }&nbsp;
	  <span className={"small"}>{secondarySkill.ratio}</span>
	</Button>
	);
}

