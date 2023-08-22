import "./assets/css/main.css";
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditProfileWorker, RegisterRecruiter, RegisterWorker, LoginRecruiter, LoginWorker, ProfilePortfolio, Home, Hire, LandingPage, Chat, EmailVerifyRecruiter, EmailVerifyWorker } from "./page";
import AuthRecruiter from "./utils/AuthRecruiter";
import AuthWorker from "./utils/AuthWorker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <AuthRecruiter>
                <Home />
              </AuthRecruiter>
            }
          />
          <Route path="/loginWorker" element={<LoginWorker />} />
          <Route path="/loginRecruiter" element={<LoginRecruiter />} />
          <Route path="/registerWorker" element={<RegisterWorker />} />
          <Route path="/registerRecruiter" element={<RegisterRecruiter />} />
          <Route
            path="/editProfileWorker"
            element={
              <AuthWorker>
                <EditProfileWorker />
              </AuthWorker>
            }
          />
          <Route
            path="/profilePortfolio/:id"
            element={
              <AuthRecruiter>
                <ProfilePortfolio />
              </AuthRecruiter>
            }
          />
          <Route
            path="/hire"
            element={
              <AuthRecruiter>
                <Hire />
              </AuthRecruiter>
            }
          />
          <Route path="/chat" element={<Chat />} />
          <Route path="/email-verify-recruiter/:id" element={<EmailVerifyRecruiter />} />
          <Route path="/email-verify-worker/:id" element={<EmailVerifyWorker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
