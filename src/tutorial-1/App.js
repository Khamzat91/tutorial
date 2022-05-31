import React from "react";
import ProfileClassComponent from "./ProfileClassComponent";
import ProfileFuncComponent from "./ProfileFuncComponent";

function App() {
  return (
    <div className="App">
      <ProfileFuncComponent name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClassComponent name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
