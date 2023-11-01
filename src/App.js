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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<AppWrapper />}>
          <Route path="/app/dashboard" element={<DashboardIndex />}></Route>
          <Route path="/app/profile" element={<ProfileIndex />}></Route>
          <Route path="/app/Screen2Index" element={<Screen2Index />}></Route>
          <Route path="/app/Screen3Index" element={<Screen3Index />}></Route>
          <Route path="/app/CategoryScreenIndex" element={<CategoryScreenIndex />}></Route>
          <Route path="/app/IndexScreen5" element={<IndexScreen5 />}></Route>
          <Route path="/app/Screen6Index" element={<Screen6Index />}></Route>



        </Route>
        <Route index element={<StartUpLogin />} />
        <Route path="/signUpPage" element={<Signup />}></Route>
        <Route path="/logoutpage" element={<StartUpLogin />}></Route>
        <Route
          path="/gotoSignUp"
          element={<StartUpLogin></StartUpLogin>}
        ></Route>
        <Route path="/dashboard" element={<DashboardIndex />}></Route>

        {/* <Route path="/DashboardBodymain"  element={ <CardBodyMainDashBorad></CardBodyMainDashBorad>}></Route> */}
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
