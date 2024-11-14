import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import CoverPage from "./pages/CoverPage";
import PricingPage from "./pages/PricingPage";
import { useEffect } from "react";
import Footer from "./component/Footer/Footer";
import SignUp from "./component/Authentication/SignUp";
import SignIn from "./component/Authentication/SignIn";
import Template2 from "./component/Resume_Templates/Template2";
import Template1 from "./component/Resume_Templates/Template1";
import Template3 from "./component/Resume_Templates/Template3";
import Template4 from "./component/Resume_Templates/Template4";
import Template5 from "./component/Resume_Templates/Template5";
import Template6 from "./component/Resume_Templates/Template6";
import Template7 from "./component/Resume_Templates/Template7";
import Template8 from "./component/Resume_Templates/Template8";
import Template9 from "./component/Resume_Templates/Template9";
import Template10 from "./component/Resume_Templates/Template10";
import AtsResume from "./component/Ats/AtsResume";
import NewPswd from "./component/Authentication/NewPswd";
import ForgotPswd from "./component/Authentication/ForgotPswd";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  const hideNavbarAndFooter = [
    "/signup",
    "/signin",
    "/forgotpswd",
    "/template1",
    "/template2",
    "/template3",
    "/template4",
    "/template5",
    "/template6",
    "/template7",
    "/template8",
    "/template9",
    "/template10",
    "/new-password",
  ].includes(location.pathname);

  return (
    <div className="font-Poppins">
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/cover" element={<CoverPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpswd" element={<ForgotPswd />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
        <Route path="/template4" element={<Template4 />} />
        <Route path="/template5" element={<Template5 />} />
        <Route path="/template6" element={<Template6 />} />
        <Route path="/template7" element={<Template7 />} />
        <Route path="/template8" element={<Template8 />} />
        <Route path="/template9" element={<Template9 />} />
        <Route path="/template10" element={<Template10 />} />
        <Route path="/atsresume" element={<AtsResume />} />
        <Route path="/new-password" element={<NewPswd />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
