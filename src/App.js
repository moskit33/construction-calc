import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            {/* <a className="navbar-brand" href="index.html">
              <img src={logo} alt="Techro HTML5 template" />
            </a> */}
          </div>
          <div className="navbar-collapse ">
            <ul className="nav navbar-nav pull-right mainNav">
              <li className="active">
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/about">О Компании</Link>
              </li>
              <li>
                <Link to="/news">Новости</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
