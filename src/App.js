import logo from "./logo.svg";
import "./App.css";
import DrawerAppBar from "./components/Nav";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import States from "./components/States";
import Office from "./components/Office";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/States" element={<States />} />
        <Route path="/Office" element={<Office />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
//const pages = ["Home", "Office", "States", "Contact"];
// import { Link } from "react-router-dom";
{
  /* <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={`/${page}`}
                >
                  {page}
                </Link> */
}
