# Rules of Hooks & Hooks Best Practices
1. Only call Hooks in Components and Custom Hooks
-  Don't call Hooks from regular JavaScript functions.
-  Don't call Hooks from nested functions.

> GOOD:
```javascript
const App = () => {
  const [val, setVal] = useState(0);
}
```

> BAD:
```javascript
const [val, setVal] = useState(0);
const App = () => {
  ...
}
```

2. Only call hooks on the top level
- React hooks must NOT be called in nested code statements (eg. inside if statements, for loops, etc.)

> GOOD:
```javascript
const App = () => {
  const [val, setVal] = useState(0);
  if (val > 0) {
    ...
  }
}
```

> BAD:
```javascript
const App = () => {
  if (val > 0) {
    const [val, setVal] = useState(0);
    ...
  }
}
```