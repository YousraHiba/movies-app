import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";

import "./App.css";
import NewReleases from "./components/newReleases/NewReleases";
import HeaderBar from "./components/shared/HeaderBar";
import TrendingMovies from "./components/trending/TrendingMovies";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import LoginUser from "./views/authentication/LoginUser";
import Home from "./views/home/Home";
function App() {
  return (
    <div className="App ">
      <HeaderBar />
      <Routes>
        <Route exact path="/user" element={<LoginUser />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
