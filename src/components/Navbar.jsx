import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav className=" navs navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand fw-bold" to="/signup">
        The Timeless Trunk
      </NavLink>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          {/* Always visible */}
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Clothes
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/addclothe" className="nav-link">
              Add Clothe
            </NavLink>
          </li>

          {/* Conditional Rendering */}
          {user ? (
            <>
              {/* Username */}
              <li className="nav-item">
                <span className="nav-link text-success fw-bold">
                  👋 {user.username}
                </span>
              </li>

              {/* Logout */}
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  Signup
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/signin" className="nav-link">
                  Signin
                </NavLink>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;