import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import '../css/style.css';

const Navbar: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Redirect to dashboard on successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google sign-in", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to home page or any other page after sign-out
    } catch (error) {
      console.error("Error during sign-out", error);
    }
  };

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
          {user ? (
            <button
              onClick={handleSignOut}
              className="navbar_link w-nav-link"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleGoogleSignIn}
              className="navbar_link w-nav-link"
            >
              Sign In
            </button>
          )}
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
