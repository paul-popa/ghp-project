import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ghp-project" element={<Home />}></Route>
        <Route path="/ghp-project/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
