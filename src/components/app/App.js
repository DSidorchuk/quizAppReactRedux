import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const StartPage = lazy(() => import("../pages/startPage/StartPage"));
const GamePage = lazy(() => import("../pages/gamePage/GamePage"));
const ScorePage = lazy(() => import("../pages/scorePage/ScorePage"));
const Page404 = lazy(() => import("../pages/page404/Page404"));
const Spinner = lazy(() => import('../spinner/Spinner'));

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="/scores" element={<ScorePage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>

  );
}

export default App;
