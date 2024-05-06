import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Homepage} from "./components/Homepage";
import Registrationform from "./components/Registrationform";
import SubmissionPage from "./components/Submission";

function App() {
  return (
    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<Homepage/>} />
      <Route path="registration" element={<Registrationform/>} />
      <Route path="submission" element={<SubmissionPage/>} />
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
