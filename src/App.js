import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Test from "./Test";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
