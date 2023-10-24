import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import LoginApp from './Components/login/index';
import DashboardIndex from './Components/dashboard';

function App() {
  return (
    <div className="App">
        <LoginApp></LoginApp>
        <DashboardIndex></DashboardIndex>
    </div>
  );
}

export default App;
