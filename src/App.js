import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./component/sidebar/Sidebar";
import SideFooter from "./component/sidebar/SideFooters";
import Header from "./component/header/Header";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <SideFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
