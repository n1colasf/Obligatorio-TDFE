import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <Login />
      <br />
      <Registro />
      <br />
      <Dashboard />
      <br />
    </div>
  );
}

export default App;
