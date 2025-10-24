import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import IdInput from "./Components/IdInput";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IdInput/>} />
        {/* <Route path="/:assesmentId" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
