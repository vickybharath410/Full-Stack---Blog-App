import './App.css';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Signup from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
      <HomePage/>
    </div>
  );
}

export default App;
