import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;