lint :
	gjslint --nojsdoc spectrum-slider.js
	tidy -errors -quiet index.html

readme.html : readme.rst
	rst2html $< $@
