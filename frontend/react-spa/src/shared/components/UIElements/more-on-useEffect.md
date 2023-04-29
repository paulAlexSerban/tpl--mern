## Optional: More on the useEffect() Hook
**Hooks are an important concept** in modern React - they allow you to add various functionalities to functional components. And that's important: **Only to functional components**.
If you're building class-based components (which you also can), you can't use hooks - you got different APIs there.

In this course, we use functional components only and hence we use Hooks. Therefore, let's have a closer look at this very important `useEffect()` hook.

We already saw `useState()` before - this allowed us to register state which then is managed inside of a component. When state is changed, the component re-renders (or to be precise: It is re-evaluated and might lead to a re-rendering of the DOM).
`useEffect()` does something different: It allows you to **register some logic** (i.e. a JS function) which will be executed when certain **dependencies** - which you define - change.

Let's have a look at the `Map` example:
```javascript
useEffect(() => {
  const map = new window.google.maps.Map(mapRef.current, {
    center: center,
    zoom: zoom
  });
  
  new window.google.maps.Marker({ position: center, map: map });
}, [center, zoom]);
```
The **logic** here (i.e. the function) is to render a map + a marker on the map.
The **dependencies**, that define when this logic should re-run, are our `center` and `zoom` variables. Whenever at least one of these two dependencies changes, the function re-runs.
And that makes sense: If we got a new center or zoom level, we want to re-render the map!

However, React does not track these dependencies behind the scenes. Instead, `useEffect()` re-evaluates the dependency values **whenever the component in which you use** `useEffect()` **is re-evaluated** (i.e. whenever the component's props or state changed).

If the component is re-evaluated and the dependencies did NOT change, the logic in useEffect() won't run again.

**Important**: The `useEffect()` logic re-runs **AFTER** the component (including its JSX code) was re-evaluated. That means, that the first execution of the `useEffect()` logic (when a component mounts for the first time) will **ALWAYS** happen **AFTER** the component rendered for the first time.

You can learn more about `useEffect()` in the [official docs](https://reactjs.org/docs/hooks-reference.html#useeffect) (or my "React - The Complete Guide" course of course): 