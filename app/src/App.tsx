import React from "react";
import Timeline from "./components/Timeline.tsx";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>技術タイムライン</h1>
      <Timeline />
    </div>
  );
};

export default App;
