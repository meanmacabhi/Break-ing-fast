import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    const { country, onCountryChange } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Break-ing-fast</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              </ul>
              <div className="d-flex">
                <label className="me-2 text-white" htmlFor="countrySelect">Country:</label>
                <select id="countrySelect" value={country} onChange={onCountryChange} className="form-select">
                  <option value="us">United States</option>
                  <option value="gb">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="in">India</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
