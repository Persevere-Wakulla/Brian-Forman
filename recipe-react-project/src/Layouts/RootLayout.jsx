import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-Layout">
      <header className="head">
        <nav
          id="FU"
          className="nav navbar-expand-sm navbar-dark fixed-top bg-dark"
        >
          <div className="container-fluid d-flex justify-content-between align-items-end line">
            <h2 className="navbar-brand">Recipe</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-theme="dark"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="offcanvas offcanvas-end bg-dark bg-gradient text-bg-dark"
              style={{ "--bs-bg-opacity": 0.5 }}
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div id="flex" className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Recipe
                </h5>
                <button
                  type="button"
                  className="btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >X</button>
              </div>
              <div className="offcanvas-body">
                  <ul className="navbar-nav me-auto justify-content-end flex-grow-1 pe-3 kids text-bg-dark gap-3">
                    <li className="nav-item">
                      <NavLink className="nav-link p-1" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link p-1" to="about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link p-1" to="recipes">
                        Recipes
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link p-1" to="help">
                        Help
                      </NavLink>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
