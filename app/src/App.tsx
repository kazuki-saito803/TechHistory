import React from "react";
import Timeline from "./components/Timeline.tsx";
import "./css/App.css"

const App: React.FC = () => {
  return (
    <div className="baseContainer">
      <h1>技術年表</h1>
      <Timeline />
    </div>
  );
};

export default App;
