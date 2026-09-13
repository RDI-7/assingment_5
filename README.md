# Dev Stack

Dev Stack is a React-based web application that helps developers
explore different technologies and build their ideal development stack.

## Technologies Used

- React.js
- JavaScript ES6+
- Tailwind CSS
- React Toastify
- JSON
- Vite

## Features

### 1. Technology Explorer

Users can explore frontend, backend, database, language, styling,
and DevOps technologies from a responsive card layout.

### 2. Build Your Stack

Users can add technologies to their personal stack and see the
selected technologies in the Your Stack section.

### 3. Stack Management

Users can remove individual technologies or clear the entire stack.
Toast notifications are shown for add, duplicate, remove, and
remove-all actions.

---

# React Questions

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.
React uses JSX because it makes UI code easier to read and write.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

## 3. What does the useState hook do, and where did you use it?

useState lets a React component store and update data.

In this project, I used useState for:

- Technology data
- Selected stack
- Loading state
- Mobile menu state

## 4. What does the useEffect hook do, and why did you need it?

useEffect runs code after a component renders.

I used it to fetch the technology JSON data when the Technology
Section loads.

## 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps
React understand which items changed, were added, or were removed.

## 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

For example, when the stack is empty, we show:

"Your stack is empty."

When technologies are selected, we show the selected technologies instead.

## 7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send information back by calling a function that the parent
passes to it as a prop.

In this project, the parent passes the technology data to
TechnologyCard, and the card calls the onAdd function when the user
clicks Add to Stack.