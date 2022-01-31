import { useContext } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import ProductList from "./components/productlist/ProductList";
import { ThemeContext } from "./context";

function App() {
  // const darkMode=true
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  >
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>
  );
}

export default App;
