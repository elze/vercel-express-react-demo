import React from 'react';
import './App.css';

import utils from './Utils';

//export function SecondarySkill = ({primarySkill, secondarySkill}) => {
export function SecondarySkill({ primarySkill, secondarySkill }) {	
	
  return (
  <a href= { `/jobsnippets/${secondarySkill.id}/${primarySkill.primary_term}/${secondarySkill.secondary_term}` } 		
	
	className={'btn btn-outline-dark button-with-margin ' + utils.getButtonColor(secondarySkill.ratio)} >
	  { secondarySkill.secondary_term }&nbsp;
	  <span className={"small"}>{secondarySkill.ratio}</span>
  </a>

  );
}

