# evaluate-text-expression-component
This component creates a web worker and does a safe eval calculation on the text result of its contents. 

## Usage

Include the js file, ensuring the web worker is included. 

```HTML

  <local-variable 
  id="variable-1"></local-variable>

  <local-variable 
  id="expression"></local-variable>
  <local-variable 
  id="variable-2"></local-variable>

  <evaluate-expression id="result">
  <local-variable source="variable-1"></local-variable>

  <local-variable source="expression"></local-variable>

  <local-variable source="variable-2"></local-variable>

  </evaluate-expression>
  result:
  <local-variable source="result"></local-variable>

```

