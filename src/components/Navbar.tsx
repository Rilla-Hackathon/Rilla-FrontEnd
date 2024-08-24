import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar: React.FC = () => {
  return (
    <div
      data-animation="default"
      className="navbar w-nav"
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="e2b431c1-ce6c-2d35-bac9-4228512cd641"
      role="banner"
      data-duration="400"
    >
      <div className="navbar_container">
        <Link
          to="/"
          aria-current="page"
          className="navbar_logo-link w-nav-brand w--current"
        >
          <img
            src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65dfc4264b45fd17a9e95304_Vector.webp"
            loading="lazy"
            alt="Logo"
            className="navbar_logo"
          />
        </Link>
        <nav
          role="navigation"
          className="navbar_menu is-page-height-tablet w-nav-menu"
        >
          <Link to="/login" className="navbar_link w-nav-link">
            Login
          </Link>
        </nav>
        <div className="navbar_menu-button w-nav-button">
          <div className="menu-icon1">
            <div className="menu-icon1_line-top"></div>
            <div className="menu-icon1_line-middle">
              <div className="menu-icon_line-middle-inner"></div>
            </div>
            <div className="menu-icon1_line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
