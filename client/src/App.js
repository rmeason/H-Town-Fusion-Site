import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Members from "./pages/Members";
// import UserForm from "./pages/UserForm";
import TopBar from "./pages/components/TopBar";
import Footer from "./pages/components/Footer";
import HomePage from "./pages/HomePage";
import NewsPage from './pages/NewsPage';
// import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
          
          <Route exact path={["/", "/home"]}>
            <HomePage />
          </Route>
          
          <Route path="/news">
            <NewsPage />
          </Route>
          
          {/* <Route path="/community">
            <CommunityPage />
          </Route> */}
        
        <Footer />
      </div>
    
    </Router>
  );
}

export default App;
