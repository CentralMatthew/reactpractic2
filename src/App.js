import logo from './logo.svg';
import './App.css';
import Users from "./components/Users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Routers from "./components/Routers/Routers";


function App() {
  return (
    <div>
      <Routers/>
    </div>
  );
}

export default App;
