import Button from '@mui/material/Button';
//import { SecondarySkill } from './SecondarySkill'
import { SkillCategory } from './SkillCategory'
import teal from '@material-ui/core/colors/teal';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme)=>({
	buttonExpanded: {
		backgroundColor: theme.palette.primary.main,		
		color: theme.palette.text.inverse,
	},
	hasManyAssociations: {
		/* backgroundColor: '#f0f5f5', */
		/* backgroundColor: '#e3f6f6', */
		/* backgroundColor: '#c7e7e7', */
		backgroundColor: teal[100],
		borderWidth: '2px'
	},	
	secondaryArea: {
		padding: '20px',
		marginLeft: '30px',
		marginRight: '30px',
		marginTop: '20px',
		marginBottom: '20px',
		/* backgroundColor: 'AliceBlue' */
		backgroundColor: '#f9fcff'
	}
}));

export function PrimaryTerm ({ primarySkill, ind, dispatch }) {	
	const classes = useStyles();
	const id = primarySkill.primary_term.split(' ').join('-');
  return (
 <div id={id} key={primarySkill.primary_term}>
	<Button variant="contained" sx={{ m: 1 }} key={primarySkill.primary_term} 
	color={ primarySkill.showCategories ? 'highlighted' : 'primary'}
	className={clsx(
	{
		[classes.hasManyAssociations]: !primarySkill.showCategories && primarySkill.categories.length > 9
	}
	)}
	onClick={() => dispatch({type: 'toggleButton', index: ind})}>
	{primarySkill.primary_term}
	</Button>
	<div className={clsx({[classes.secondaryArea]: primarySkill.showCategories})}>
	  { 
		primarySkill.showCategories ? 
		<span> {
			primarySkill.categories.map((category) => {							
			  return <SkillCategory key={category.categoryName} primarySkill={primarySkill} category={category} />			  
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
