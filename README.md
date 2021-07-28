## State on function component

`useState` is a Hook, and will return the value of the state (in the example above: name) and a function that we can use to change that value (setName). The setName function here is similar to how `this.setState` works.

> File : `src/ExampleForm.js`

Import useState :

```javascript
import React, { useState } from "react";
```

Create state and the attribute :

```javascript
const [state, setState] = useState({
  fullname: "",
  email: "",
  password: "",
});
```

Create function for handle on change with setState :

```javascript
const handleOnChange = (e) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};
```

Create function for handle submit :

```javascript
const handleOnSubmit = (e) => {
  e.preventDefault();
  console.log(state);
};
```
