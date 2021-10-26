import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Routes from "./components/routes/Routes";
import { CarritoContexto } from "../src/components/provider/CardProvider";

function App() {
  return (
    <div className="App">
      <CarritoContexto>
        <Routes />
      </CarritoContexto>
    </div>
  );
}

export default App;
