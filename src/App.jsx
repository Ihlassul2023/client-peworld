import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditProfileWorker, RegisterRecruiter, RegisterWorker, LoginRecruiter, LoginWorker } from "./page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loginWorker" element={<LoginWorker />} />
          <Route path="/loginRecruiter" element={<LoginRecruiter />} />
          <Route path="/registerWorker" element={<RegisterWorker />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route path="/editProfileWorker" element={<EditProfileWorker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
