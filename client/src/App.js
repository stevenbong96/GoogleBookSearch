import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./pages/Save/Save";
import Search from "./pages/Search/Search";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
