import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import DetailMovie from "./pages/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:imdbID" element={<DetailMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
