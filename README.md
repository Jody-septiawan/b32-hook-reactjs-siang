# Lifecycle

`Lifecycle` can literally be interpreted as a life cycle. For example, the human life cycle. First humans will be born, then enter the growth phase, and finally will die. Just like humans, every component in react js also has a life cycle.

Lifecycle component :

- componentDidmount
- componentWillUnmount
- componentDidUpdate

Lifecycle component method diagram: [link](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## lifecycle on class component

> File : `src/App.js`

Method componentDidMount :

```javascript
componentDidMount(){
    console.log("App Component Did Mount")
    console.log(this.state)
}
```

Method componentDidUpdate :

```javascript
componentDidUpdate(){
    console.log("App Component Did Update")
    console.log(this.state)
}
```

---

> File : `src/Welcome.js`

Method componentDidMount :

```javascript
componentDidMount(){
    console.log("Welcome Component Did Mount")
}
```

Method componentWillUnmount :

```javascript
componentWillUnmount(){
    console.log("Welcome Component  Will Unmount")
}
```

---

> File : `src/GuestGreeting.js`

Method componentWillUnmount :

```javascript
componentWillUnmount(){
    console.log("Guest Greeting Component Will Unmount")
}
```
