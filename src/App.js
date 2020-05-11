import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch } from "react-redux";
import { Wizard } from "./wizard/Wizard";
import { canAdvance } from "./wizard/wizardSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <Wizard>
      <div validation={true}>
        Step 1
        <button onClick={() => dispatch(canAdvance())}>Allow Advance</button>
      </div>
      <div>Step 2</div>
      <div forward_label="Finish">Step 3</div>
      <div>Thanks!</div>
    </Wizard>
  );
}

export default App;
