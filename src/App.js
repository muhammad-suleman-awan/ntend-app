import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import DashboardIndex from "./Components/dashboard";
import Screen2Index from "./Components/screen2/screen2Index";
import Screen3Index from "./Components/screen3/screen3index";
import CategoryScreenIndex from "./Components/screen4/screen4index";
import IndexScreen5 from "./Components/screen5/screen5Index";
import Screen6Index from "./Components/screen6/screen6Index";
import ProfileIndex from "./Components/profile/profileIndex";
import StartUpLogin from "./Components/login/loginScreen";
import Signup from "./Components/login/signup";
import CardBodyMainDashBorad from "./Components/dashboard/bodycardDashBoard";
import AppWrapper from "./Components/AppWrapper";
import { colors } from "@mui/material";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<AppWrapper />}>
          <Route index element={<CardBodyMainDashBorad />} />
          <Route
            path="/dashboard/dashborady1"
            element={<CardBodyMainDashBorad />}
          ></Route>
          <Route
            path="/dashboard/Contract"
            element={<Screen2Index></Screen2Index>}
          ></Route>
          <Route path="/dashboard/addContract" element={<Screen3Index />} />
          <Route
            path="/dashboard/Categories"
            element={<CategoryScreenIndex />}
          />
          <Route path="/dashboard/AllContracts" element={<IndexScreen5 />} />
          {/* <Route path="/dashboard/profileset" element={<ProfileIndex />} /> */}
        </Route>
        <Route index element={<StartUpLogin />} />
        <Route path="/logout" element={<StartUpLogin />} />
        <Route path="/signUpPage" element={<Signup />} />
        <Route path="/gotoSignUp" element={<StartUpLogin />} />

        {/* <Route path="/dashboard" element={<DashboardIndex />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <LoginApp />

              <Signup></Signup>

        <DashboardIndex></DashboardIndex>
        <Screen2Index></Screen2Index>
        <Screen3Index></Screen3Index>
        <CategoryScreenIndex></CategoryScreenIndex>
        <IndexScreen5></IndexScreen5>
        <Screen6Index></Screen6Index>
        <ProfileIndex></ProfileIndex> */
}
