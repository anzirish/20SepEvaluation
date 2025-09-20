import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo/:owner/:repoName" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
