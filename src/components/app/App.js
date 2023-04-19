import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "../pages/startPage/StartPage";
import GamePage from "../pages/gamePage/GamePage";
import ScorePage from "../pages/scorePage/ScorePage";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback="div">
          <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="/scores" element={<ScorePage/>}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>

  );
}

export default App;
