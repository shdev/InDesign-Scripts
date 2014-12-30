all: dist/getcorrds.jsx

dist/getcorrds.jsx: getcorrds.inc.js JSON-js/json.js
	@echo Creating getcorrds.jsx
	@cat JSON-js/json.js getcorrds.inc.js > dist/getcorrds.jsx

clean: 
	@echo Deleting getcorrds.jsx
	@rm -f dist/getcorrds.jsx