import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import Header from "./components/header";
import Content from "./components/content";
import NotFound from "./components/notFound";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/about";
import CardForm from "./components/cardForm";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="container">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/employees/:id" component={CardForm} />
          <Route path="/employees" component={Content} />

          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/employees" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
