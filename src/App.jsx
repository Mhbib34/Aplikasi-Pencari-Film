import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import DetailMovie from "./pages/detail";
import WatchList from "./pages/list";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:imdbID" element={<DetailMovie />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;
