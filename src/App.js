import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderBar from "./components/shared/HeaderBar";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import LoginUser from "./views/authentication/LoginUser";
import Home from "./views/home/Home";
import RegistrationUser from "./views/authentication/RegistrationUser";
function App() {
  return (
    <div className="App ">
      <HeaderBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/user" element={<LoginUser />}></Route>
        <Route
          exact
          path="/registration"
          element={<RegistrationUser />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
