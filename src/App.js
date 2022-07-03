import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ghp-project" element={<Home />}></Route>
          <Route path="/ghp-project/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
