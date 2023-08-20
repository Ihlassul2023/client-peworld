import "./assets/css/main.css";
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  EditProfileWorker,
  EditProfileRecruiter,
  RegisterRecruiter,
  RegisterWorker,
  LoginRecruiter,
  LoginWorker,
  ProfilePortfolio,
  Home,
  Hire,
} from "./page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/loginWorker" element={<LoginWorker />} />
          <Route path="/loginRecruiter" element={<LoginRecruiter />} />
          <Route path="/registerWorker" element={<RegisterWorker />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route path="/editProfileWorker" element={<EditProfileWorker />} />
          <Route
            path="/editProfileRecruiter"
            element={<EditProfileRecruiter />}
          />
          <Route path="/profilePortfolio" element={<ProfilePortfolio />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
