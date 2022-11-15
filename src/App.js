import BasicTween from "./components/basic-tween";
import Timelines from "./components/timelines";

import "./App.css";
import ScrollRecap from "./components/scrolling";

function App() {
  return (
    <div className="App">
      <BasicTween />
      <Timelines />
      <ScrollRecap />
    </div>
  );
}

export default App;
