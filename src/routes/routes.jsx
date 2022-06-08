import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Work } from "../pages/Work";
import { PopupTheme } from "../components/PopupTheme";

function PageVisible() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/work" element={ <Work /> } />
      <Route exact path="/config" element={ <PopupTheme /> } />
    </Routes>
  )
}
export default PageVisible;
