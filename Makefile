all: dist/getcorrds_array.jsx dist/getcorrds_object.jsx

dist/getcorrds_array.jsx: getcorrds_array.inc.js JSON-js/json.js
	@echo Creating getcorrds_array.jsx
	@cat JSON-js/json.js getcorrds_array.inc.js > dist/getcorrds_array.jsx

dist/getcorrds_object.jsx: getcorrds_object.inc.js JSON-js/json.js
	@echo Creating getcorrds_object.jsx
	@cat JSON-js/json.js getcorrds_object.inc.js > dist/getcorrds_object.jsx

clean: 
	@echo Deleting getcorrds_array.jsx, getcorrds_object.jsx
	@rm -f dist/getcorrds_array.jsx dist/getcorrds_object.jsx