//From Sofa app
exports.slugifyString = function(string) {
  return string.replace(/\W/g,'-').
    replace(/\-*$/,'').replace(/^\-*/,'').
    replace(/\-{2,}/,'-');
}

exports.fullMonth = function(int){
	var fullMonthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
	return(fullMonthNames[int]);
}