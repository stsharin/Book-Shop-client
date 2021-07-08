import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/home">Readers Club</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <a className="nav-link active" href="/home">Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/myOrder">Order</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/allBookDetails">Admin</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/checkout">Checkout</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to="/login"><button className="btn" style={{ backgroundColor: '#1d5ca0', color: 'white'}}>Login</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;