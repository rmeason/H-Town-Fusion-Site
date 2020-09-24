import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import UserForm from "./pages/UserForm";
import TopBar from "./pages/components/TopBar";
import Footer from "./pages/components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route extract path={["/", "/home"]}>
            <HomePage />
          </Route>
          <Route exact path={["/members"]}>
            <Members />
          </Route>
          <Route exact path={["/signup", "/login"]}>
            <UserForm />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
