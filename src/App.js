import React from "react";
import DatePicker from "./date-picker/date-picker.component";
import DateToFrom from "./date-picker/date-to-from/date-to-from.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <DatePicker/>
      <DateToFrom/>

    </div>
  );
}

export default App;
