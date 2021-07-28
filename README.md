# useEffect

The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

## lifecycle on function component

> File : `src/App.js`

Import useState and useEffect :

```javascript
import React, { useState, useEffect } from "react";
```

Method componentDidMount :

```javascript
useEffect(() => {
  console.log("App Component Did Mount");
  console.log(state);
}, []);
```

Method componentDidUpdate :

```javascript
useEffect(() => {
  if (state.user.email) {
    console.log("App Component Did Update");
    console.log(state);
  }
}, [state]);
```

---

> File : `src/Welcome.js`

Import useState and useEffect :

```javascript
import React, { useState, useEffect } from "react";
```

Method componentDidMount and componentWillUnmount :

```javascript
useEffect(() => {
  console.log("Welcome Component Did Mount");
  return () => {
    console.log("Welcome Component Will Unmount");
  };
}, []);
```

---

> File : `src/GuestGreeting.js`

Method componentDidMount and componentWillUnmount :

```javascript
useEffect(() => {
  console.log("Guest Greeting Component Did Mount");
  return () => {
    console.log("Guest Greeting Component Will Unmount");
  };
}, []);
```
