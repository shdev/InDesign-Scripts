all: dist/getcorrds_array.jsx

dist/getcorrds_array.jsx: getcorrds_array.inc.js JSON-js/json.js
	@echo Creating getcorrds_array.jsx
	@cat JSON-js/json.js getcorrds_array.inc.js > dist/getcorrds_array.jsx

clean: 
	@echo Deleting getcorrds_array.jsx
	@rm -f dist/getcorrds_array.jsx