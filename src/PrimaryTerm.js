import Button from '@mui/material/Button';
import { SkillCategory } from './SkillCategory'

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
	buttonDefault: {
	  marginBottom: '1em',
	  marginLeft: '1em',
	  marginRight: '1em',
	  color: 'DarkCyan',
	  textTransform: 'none',
	  '&:hover': {
		  backgroundColor: '#fff',
		  color: '#3c52b2',
	  },	  
	},
	buttonExpanded: {
		backgroundColor: 'DarkCyan',
		color: 'white'
	},
	hasManyCategories: {
		backgroundColor: '#f0f5f5',
		borderWidth: '2px'
	},	
	secondaryArea: {
		paddingLeft: '20px',
		paddingRight: '20px',
		marginLeft: '30px',
		marginRight: '30px',
		backgroundColor: '#f9fcff'
	}
});

export function PrimaryTerm ({ primarySkill, ind, dispatch }) {	
	const classes = useStyles();
	const id = primarySkill.primary_term.split(' ').join('-');
  return (
 <div id={id} key={primarySkill.primary_term}>
	<Button variant="outlined" key={primarySkill.primary_term} 
	className={clsx(classes.buttonDefault, 
	{
		[classes.buttonExpanded]: primarySkill.showCategories,
		[classes.hasManyCategories]: !primarySkill.showCategories && primarySkill.categories.length > 9
	})} 
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
