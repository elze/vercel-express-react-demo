import Button from '@mui/material/Button';
import { SkillCategory } from './SkillCategory'

import { Box } from '@mui/system';

export function PrimaryTerm ({ primarySkill, ind, dispatch }) {	
	const id = primarySkill.primary_term.split(' ').join('-');
	let sxObj = {m: 1,
			...(primarySkill.showCategories) && {bgcolor: 'highlighted.main', color: 'highlighted.contrastText'},
			...(!primarySkill.showCategories && primarySkill.categories.length > 9) 
				&& {bgcolor: 'hasManyAssociations.main', border: 1, color: 'hasManyAssociations.contrastText'}
	};
	const secondaryAreaObj = {
		backgroundColor: 'secondaryArea.main',
		width: 3/4,
		m: 'auto'
	}	
  return (
 <div id={id} key={primarySkill.primary_term}>
	<Button variant="contained" sx={sxObj} key={primarySkill.primary_term} 	
			onClick={() => dispatch({type: 'toggleButton', index: ind})}>
	{primarySkill.primary_term}
	</Button>
	<Box sx={secondaryAreaObj}>
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
	</Box>				
 </div>
 );
}
