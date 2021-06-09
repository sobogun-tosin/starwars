import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/navbar/Nav";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import CharacterDetails from "./pages/characterDetails/CharacterDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/character/:id" exact component={CharacterDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
