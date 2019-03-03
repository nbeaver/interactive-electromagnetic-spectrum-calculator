lint :
	gjslint --nojsdoc spectrum-slider.js
	tidy -errors -quiet index.html
