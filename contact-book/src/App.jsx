// Importing our css
import './components/style/App.css';
// import './fileLocation'
import Form from './components/Form';

// Creating Components
// 1. inside of app.jsx
// 2. outside

// !Documentation
//react.dev/learn/describing-the-ui
//react.dev/learn/thinking-in-react
// Patterns books

//React Components starts capital letter
// 1. Creating and component inside of your App.jsx

function App() {
  return (
    // load a component
    // Run our Website - npm run dev // stop ctr c
    // React Component must be one child. React fragment <> </>
    <>
      {/* Function and Component name must match */}
      <Form/>
    </>
  );
}

export default App;
