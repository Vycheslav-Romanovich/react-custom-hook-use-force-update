[![npm version](https://badge.fury.io/js/react-custom-hook-use-force-update.svg)](https://badge.fury.io/js/react-custom-hook-use-force-update)


## [Live example](https://codesandbox.io/s/react-custom-hook-use-force-update-example-zty46)

# React hook to call force render.

This project was created to help people use force render in functional components


### Usage
```javascript
import React from "react";
import { useForceUpdate } from "react-custom-hook-use-force-update";

const App = () => {
  // If you use eslint plugin rules-of-hooks,
  // first letter must be capitalized according to the rule: react-hooks/rules-of-hooks
  const UseForceUpdateFn = useForceUpdate();

  function handleClick() {
    UseForceUpdateFn();
  }

  return (
    <button onClick={handleClick}>Do it</button>
  );
};

export default App;
```
