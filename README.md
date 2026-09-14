# dev-stack-react

# 🚀 DevStack

DevStack is a responsive developer technology management application built with React and TypeScript. Users can explore different technologies and create their own personalized technology stack.

## 🌐 Live Site

https://celadon-kangaroo-ad2f83.netlify.app/

## 🛠️ Technologies Used

- React.js
- TypeScript/JavaScript(ES6)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

- 🔍 Browse and explore different developer technologies with their category, difficulty, rating, and description.
- 🧰 Add technologies to a personal "Your Stack" section and remove them whenever needed.
- 📱 Fully responsive design for mobile, tablet, and desktop devices.

## 📋 Project Description

DevStack helps developers explore popular technologies and build a personalized technology stack. Technology information is loaded from a local JSON file, and users can add or remove technologies from their stack.

The application also provides toast notifications for adding, removing, duplicate selections, and clearing the entire stack.

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX to make creating and describing UI easier and more readable.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in a React component. In this project, I used `useState` to store the selected technologies in the "Your Stack" section.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects after a component renders. I used it to fetch the technology data from the local JSON file when the application loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the unique `key` to identify each item in a list. It helps React understand which items have changed, been added, or been removed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the "Your Stack" section. If there are no selected technologies, an empty message is shown. Otherwise, the selected technologies are displayed.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props.

A child can send information back to the parent by calling a function passed through props.

## 👨‍💻 Author

**Protap Paul**

Full Stack Web Development Learner
