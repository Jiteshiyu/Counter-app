# Tallytide

This is a simple Counter App built with React.js

![React](https://img.shields.io/badge/React-007ACC?style=for-the-badge&logo=react&logoColor=white)
![JSX](https://img.shields.io/badge/JSX-React%20Component-informational?style=for-the-badge&logo=react)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Challenges and Learnings](#challenges-and-learnings)

## Demo

You can view a live demo of the project [Tallytide](https://tallytide.netlify.app/).

## Features

- Utilizes Context API for global state management
- Increment the counter value
- Decrement the counter value
- Reset the counter to 0
- Responsive and clean UI

## Technologies Used

- React (for building the UI)
- Vite (for fast development environment)
- JavaScript/JSX (for logic and structure)
- Context API (for state management)
- CSS (for styling)

## Getting Started

Follow these instructions to run the project locally:

### Prerequisites

Ensure you have **Node.js** and **npm** installed. If not, you can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jiteshiyu/Tallytide.git
   cd Tallytide
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

## How It Works

This app uses Context API to manage the state of the counter. The `CounterContext` provides the counter value (`count`) and functions (`increment`, `decrement`, `reset`) to update it.

1. Context API is used to avoid prop drilling, making state available globally to all components within the app.
2. The Counter component renders the `Count` and `Controls` components, with the current counter value and button controls, respectively.
3. State Management: The state is centralized in the `CounterState` component, which wraps around the `Count` and `Controls` components, allowing them to access the counter state and update functions via `useContext`.

## Future Improvements

- **Add local storage support:** Save the counter state between page reloads using local storage.
- **Add undo/redo functionality:** Allow users to revert the last action (increment/decrement) or reapply it.
- **Multiple Counters:** Extend the app to handle multiple counters with independent states.
- **Accessibility Enhancements:** Improve the app's accessibility to meet WCAG guidelines (e.g., keyboard navigation and screen reader support).

## Challenges and Learnings

- **State Management with Context API:** Implementing Context API for the first time was a valuable learning experience. It helped eliminate prop drilling, which simplified component communication.
- **React Component Structure:** Structuring the app with clear separation between logic (`Controls`) and display (`Count`) components made the code more modular and reusable.
- **Styling Consistency:** Managing consistent and responsive styling across components was important for a cohesive UI. Tailwind CSS or Styled Components could be explored in future versions to streamline this.

## Support
Give a 🌟 to this repo if you liked it .

Connect with me

[![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@JiteshKumar&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/jitesh-kumar-93742a322)
[![Github](https://img.shields.io/static/v1.svg?label=follow&message=@Jiteshiyu&color=white&logo=github&style=for-the-badge&logoColor=white&colorA=black)](https://www.github.com/Jiteshiyu)
[![Portfolio](https://img.shields.io/static/v1?label=Visit&message=Jiteshiyu%20Portfolio&color=grey&logo=app&style=for-the-badge&logoColor=white&colorA=orange)](https://Jiteshiyu.netlify.app)

