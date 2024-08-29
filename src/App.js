import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'us', // Default country
    };
  }

  // Handler to update country state
  handleCountryChange = (event) => {
    this.setState({ country: event.target.value });
  };

  render() {
    const { country } = this.state;

    return (
      <Router>
        <div>
          {/* Pass the country and handler to Navbar */}
          <Navbar country={country} onCountryChange={this.handleCountryChange} />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<News key="home" country={country} source={"bbc-news"} category={""} pagesize={3} />} />
            <Route path="/business" element={<News key="business" country={country} source={""} category={"business"} pagesize={3} />} />
            <Route path="/technology" element={<News key="technology" country={country} source={""} category={"technology"} pagesize={3} />} />
            <Route path="/sports" element={<News key="sports" country={country} source={""} category={"sports"} pagesize={3} />} />
            <Route path="/entertainment" element={<News key="entertainment" country={country} source={""} category={"entertainment"} pagesize={3} />} />
            <Route path="/health" element={<News key="health" country={country} source={""} category={"health"} pagesize={3} />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
