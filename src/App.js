import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import LoginApp from './Components/login/index';
import DashboardIndex from './Components/dashboard';
import Screen2Index from './Components/screen2/screen2Index';

function App() {
  return (
    <div className="App">
        <LoginApp></LoginApp>
        <DashboardIndex></DashboardIndex>
        <Screen2Index></Screen2Index>
    </div>
  );
}

export default App;
