# Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a Class.

A Hook is a special function that lets you “hook into” React features. For example, useState is a hook that allows you to add React state to functional components.

##### Then what should be prepared for learning the Hooks ?

Actually quite a lot, but the basic things we need to know to learn the hook are :

- Using the State Hook
- Using the Effect Hook

## State on class component

> File : `src/ExampleForm.js`

Inside class component create constructor and init state :

```javascript
constructor(props){
    super(props)
    this.state = {
      fullname: '',
      email: '',
      password: ''
    }
  }
```

Create function for handle on change state value :

```javascript
handleOnChange = (e) => {
  this.setState({
    ...this.state,
    [e.target.name]: e.target.value,
  });
};
```

Create function for handle on submit state value :

```javascript
handleOnSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
};
```
