import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

  <a className="navbar-brand">
  <img src="https://o.remove.bg/downloads/6049c90f-798a-42b4-a380-86d6f331d02a/pngtree-vector-internet-banking-icon-png-image_755759-removebg-preview.png" width="30" height="30" className="d-inline-block align-top" alt="">
   </img> Online Banking System</a>

  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/newUser">New User / Register</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/register">Register for Internet Banking</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/createAccount">Open a new bank account</a>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;
