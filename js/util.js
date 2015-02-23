/* Funzioni Anti Spam Bot */

function decode01() {
	var v = new Array("&#111;", "&#116;", "&#109;", "&#108;", "&#97;", 
		"&#58;", "&#105;");
	var s = v[0] + v[5];
	s = v[2] + v[4] + v[6] + v[3] + v[1] + s;
	return s;
}

function decode02() {
	var v = new Array("&#105;", "&#111;", "&#46;", "&#108;", "&#115;", 
		"&#105;", "&#105;", "&#101;", "&#100;", "&#111;", 
		"&#101;", "&#97;", "&#116;", "&#99;", "&#116;", 
		"&#108;", "&#112;", "&#64;", "&#114;", "&#116;", 
		"&#112;", "&#32;");
	var s = v[20] + v[10] + v[3] + v[15] + v[7];
	s = v[17] + v[4] + v[13] + v[1] + v[16] + s;
	s = s + v[19] + v[14] + v[0] + v[2] + v[5];
	s = v[8] + v[11] + v[18] + v[6] + v[9] + s;
	s = s + v[12] + v[21];
	return s;
}