import Button from '@mui/material/Button';
import { SecondarySkill } from './SecondarySkill'

export function PrimaryTerm ({ primarySkill, ind, dispatch }) {	
  return (
 <div key={primarySkill.primary_term}>
	<Button variant="outlined" key={primarySkill.primary_term} className={ `button-with-margin${ primarySkill.showSecondary ? ' button-open' : ''}` } href="#" 
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
