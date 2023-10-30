import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import LoginApp from './Components/login/index';
import DashboardIndex from './Components/dashboard';
import Screen2Index from './Components/screen2/screen2Index';
import Screen3Index from './Components/screen3/screen3index';
import CategoryScreenIndex from './Components/screen4/screen4index';

function App() {
  return (
    <div className="App">
        <LoginApp></LoginApp>
        <DashboardIndex></DashboardIndex>
        <Screen2Index></Screen2Index>
        <Screen3Index></Screen3Index>
        <CategoryScreenIndex></CategoryScreenIndex>
    </div>
  );
}

export default App;
