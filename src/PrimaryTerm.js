import Button from '@mui/material/Button';
import { SecondarySkill } from './SecondarySkill'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	buttonWithMargin: {
	  marginBottom: '1em',
	  marginLeft: '1em',
	  marginRight: '1em',
	  color: 'DarkCyan',
	  textTransform: 'none',
	}
});


export function PrimaryTerm ({ primarySkill, ind, dispatch }) {	
	const classes = useStyles();
  return (
 <div key={primarySkill.primary_term}>
	<Button variant="outlined" key={primarySkill.primary_term} 
	className={classes.buttonWithMargin} href="#" 
	onClick={() => dispatch({type: 'toggleButton', index: ind})}>
	{primarySkill.primary_term}
	</Button>
	<div>
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
