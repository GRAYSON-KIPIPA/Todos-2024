import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Examples from "./components/Examples";
import RegisterStudent from "./components/RegisterStudent";
import TodoApp from "./components/TodoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <RegisterStudent /> */}
      {/* <Dashboard />    
       <Examples /> */}

      <TodoApp />
    </>
  );
}

export default App;
