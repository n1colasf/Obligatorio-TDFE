import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Login />
        <br />
        <Registro />
        <br />
        <Dashboard />
        <br />
        <br />
      </div>
    </Provider>
  );
}

export default App;
