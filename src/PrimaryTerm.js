import Button from '@mui/material/Button';
import { SecondarySkill } from './SecondarySkill'

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
	buttonWithMargin: {
	  marginBottom: '1em',
	  marginLeft: '1em',
	  marginRight: '1em',
	  color: 'DarkCyan',
	  textTransform: 'none',
	},
	buttonExpanded: {
		backgroundColor: 'DarkCyan',
		color: 'white'
	},
	secondaryArea: {
		padding: '20px',
		marginLeft: '30px',
		marginRight: '30px',
		marginTop: '20px',
		marginBottom: '20px',
		backgroundColor: 'AliceBlue'
	}
});


export function PrimaryTerm ({ primarySkill, ind, dispatch }) {	
	const classes = useStyles();
	const id = primarySkill.primary_term.split(' ').join('-');
  return (
 <div id={id} key={primarySkill.primary_term}>
	<Button variant="outlined" key={primarySkill.primary_term} 
	className={clsx(classes.buttonWithMargin, {[classes.buttonExpanded]: primarySkill.showSecondary})} 
	onClick={() => dispatch({type: 'toggleButton', index: ind})}>
	{primarySkill.primary_term}
	</Button>
	<div className={clsx({[classes.secondaryArea]: primarySkill.showSecondary})}>
	  { 
		primarySkill.showSecondary ? 
		<span> {
			primarySkill.associated_terms.map((secondarySkill) => {							
			  return <SecondarySkill key={secondarySkill.secondary_term} primarySkill={primarySkill} secondarySkill={secondarySkill} />			  
			}
			)
		}
		</span>
		: ''
	  }
	</div>				
 </div>
 );
}
