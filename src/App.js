import React, {useEffect} from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'


export function App() {
	
	const [allSkills, setAllSkills] = React.useState([]);	
	useEffect(() => {    
		async function getAllSkills() {
			let allSkillsInfo ;			
			try {
				const uri = `/api/skills`;
				const response = await fetch(uri);
				if (response.status !== 200) {
					const error = await response.json();
					const errorMessage = error.error?.message;
					allSkillsInfo = {allSkills: {}, error: `Server error: ${errorMessage}`};
					console.log(`getAllSkills: an error occurred: allSkillsInfo = ${JSON.stringify(allSkillsInfo)}`);
				}			
				else {
					const body = await response.json();			
					console.log(`getAllSkills: got response.json() ; response.status = ${response.status}`);
					allSkillsInfo = {allSkills: body, error: null};
				}
			}
			catch(err) {
				console.log(`getAllSkills: a network error occurred: err = ${err}`);
				allSkillsInfo = {allSkills: {}, error: `Server error: ${err}`};
			}
			setAllSkills(allSkillsInfo);
		}
		getAllSkills();

	}, []);			
	
  return (
    <div className="App">
        <header>
          <h1 className="Skills-title">Welcome to SkillClusters!</h1>
        </header>
		 <div className="text-center" style={{ display: (allSkills?.allSkills?.primary_skills && allSkills?.allSkills?.primary_skills.length > 0) || allSkills?.error ? "none" : "block" }}>
			<Spinner animation="border" role="status">
			  <span className="sr-only">Loading...</span>
			</Spinner>	
		 </div>		
		<div className="text-center" style={{ display: allSkills?.error ? "block" : "none" }}>
			<Alert variant="danger">
				An error occurred: { allSkills?.error }
			</Alert>
		</div>		 
        {
          allSkills?.allSkills?.primary_skills?.map((primarySkill, ind) => { 
            return (
			 <div key={primarySkill.primary_term}>
				<Button variant="outline-primary" key={primarySkill.primary_term} className={'button-with-margin'} href="none">
				{primarySkill.primary_term}
				</Button>
			 </div>
			)
		  }
		  )
		}
    </div>
  );
}

export default App;
