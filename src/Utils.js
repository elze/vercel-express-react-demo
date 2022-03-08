const utils = {
	getButtonClassByRatio(ratio){
	  const ratioNum = parseFloat(ratio);
	  if (ratioNum <= 0.2) {
		  return "color_02"
	  }
	  if (ratioNum <= 0.4) {
		  return "color_04"
	  }
	  if (ratioNum <= 0.6) {
		  return "color_06"
	  }
	  if (ratioNum <= 0.8) {
		  return "color_08"
	  }
	  return "color_10";
  },
  getButtonClass(mentions){
	  const numMentions = parseInt(mentions);
	  if (numMentions <= 2) {
		  return "color_02"
	  }
	  if (numMentions <= 4) {
		  return "color_04"
	  }
	  if (numMentions <= 6) {
		  return "color_06"
	  }
	  if (numMentions <= 8) {
		  return "color_08"
	  }
	  return "color_10";
  }    
};


export default utils;		