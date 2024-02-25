import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ user, handleLogOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
      <div className="container">
        <a className="navbar-brand">BURSA</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="nav-link" to="about">
              Biz Kimiz?
            </NavLink>
            <NavLink className="nav-link" to="generator">
              Nereye Gitsem?
            </NavLink>
            {user ? (
              <>
                <button className="nav-link" onClick={handleLogOut}>
                  Çıkış({user.name})
                </button>
              </>
            ) : (
              <NavLink className="nav-link" to="login">
                Giriş Yap
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
