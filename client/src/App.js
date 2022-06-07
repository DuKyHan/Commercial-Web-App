import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Registration />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
