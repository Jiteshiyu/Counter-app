# Tallytide

This is a simple Counter App built with React.js demonstrating the use of Context API for managing state globally. The app allows users to increment, decrement, and reset the counter value.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Challenges and Learnings](#challenges-and-learnings)
- [Contributing](#contributing)

## Demo

You can view a live demo of the project [here](#).

## Features

- Increment the counter value
- Decrement the counter value
- Reset the counter to 0
- Responsive and clean UI
- Utilizes Context API for global state management

## Technologies Used

- React (for building the UI)
- Vite (for fast development environment)
- JavaScript/JSX (for logic and structure)
- CSS (for styling)
- Context API (for state management)

## Getting Started

Follow these instructions to run the project locally:

### Prerequisites

Ensure you have Node.js and npm installed. If not, you can download them from [here](https://nodejs.org/).

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

## Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── Controls.jsx
│   │   └── Count.jsx
│   ├── context/
│   │   └── index.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
└── vite.config.js
└── README.md
```

- `App.jsx`: Main application component.
- `Counter.jsx`: Combines `Count` and `Controls` components to handle the counter logic.
- `Count.jsx`: Displays the current counter value.
- `Controls.jsx`: Contains buttons to increment, decrement, and reset the counter.
- `index.jsx`: Context API setup and state management for the counter.
- `App.css`: Styling for the application.

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

- Add local storage support: Save the counter state between page reloads using local storage.
- Add undo/redo functionality: Allow users to revert the last action (increment/decrement) or reapply it.
- Multiple Counters: Extend the app to handle multiple counters with independent states.
- Accessibility Enhancements: Improve the app's accessibility to meet WCAG guidelines (e.g., keyboard navigation and screen reader support).

## Challenges and Learnings

- State Management with Context API: Implementing Context API for the first time was a valuable learning experience. It helped eliminate prop drilling, which simplified component communication.
- React Component Structure: Structuring the app with clear separation between logic (`Controls`) and display (`Count`) components made the code more modular and reusable.
- Styling Consistency: Managing consistent and responsive styling across components was important for a cohesive UI. Tailwind CSS or Styled Components could be explored in future versions to streamline this.

## Contributing

Contributions are welcome! If you'd like to improve the app or add features, feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

---
