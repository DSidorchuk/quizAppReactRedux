import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const StartPage = lazy(() => import("../pages/startPage/StartPage"));
const GamePage = lazy(() => import("../pages/gamePage/GamePage"));
const ScorePage = lazy(() => import("../pages/scorePage/ScorePage"));

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
