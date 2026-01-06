## 1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures directly within your logic.
Why it's used: It provides a visual representation of the UI that is easier to read and maintain than pure JavaScript.
How it works: Browsers cannot read JSX. A compiler like Babel transforms JSX into React.createElement() calls, which React then uses to build the Virtual DOM.


## 2. What is the difference between State and Props?
While both hold information that influences the output of a render, they differ in ownership:
Props (Properties): These are "read-only" inputs passed from a parent component to a child. They are immutable from the perspective of the child.
State: This is a private, internal data store managed within the component itself. Unlike props, state is mutable (via its setter function). When state changes, the component re-renders.

## 3. What is the useState hook, and how does it work?
useState is the primary Hook used to preserve values between function calls and trigger UI updates in functional components.
How it works: It initializes state by returning an array with two elements: the current state value and a dispatch function.
The Trigger: When the dispatch function is called, React schedules a re-render of the component. It uses a "closure" to remember the value of the state even after the function finishes executing.

## 4. How can you share state between components?
The most common pattern is Lifting State Up, but the best method depends on the scale of the app:
Lifting State Up: Moving the state to the closest common ancestor. The ancestor passes the data down as Props and the update logic as Callback Functions.
Context API: Used for "Global State" (like user authentication or themes) to avoid "Prop Drilling"—the tedious process of passing props through layers of components that don't need them.
External Libraries: Using tools like Redux or Zustand for complex, large-scale state management.

## 5. How is event handling done in React?
React handles events through a Synthetic Event System. This is a cross-browser wrapper around the browser’s native event system, ensuring your code works consistently across all environments.
Key Differences from standard HTML:
Naming: Events use camelCase (e.g., onClick instead of onclick).
Syntax: You pass a function as the event handler (e.g., {handleClick}) rather than a string.
Behavior: You cannot return false to prevent default behavior; you must explicitly call event.preventDefault().