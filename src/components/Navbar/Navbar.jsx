import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/image.png";
import avatar from "../../assets/images/avatar-svgrepo-com.svg";

export default function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (window.scrollY > 230) {
        navbar.classList.add(  "py-3");
      } else {
        navbar.classList.remove( 'py-3');
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  function handleLogout() {
    // setToken(null);
    // setUserName(null);
    // localStorage.removeItem("tkn");
    // localStorage.removeItem("usr");
    navigate("/login");
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className="navbar navbar-expand-md bsb-navbar-3 fixed-top shadow-sm bg-white"
      >
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#bsbSidebar1"
                aria-controls="bsbSidebar1"
              >
                <i className="fa-solid fa-bars fs-5" />
              </Link>
            </li>
          </ul>
          <a className="navbar-brand" href="#!">
            <h2 className="main-color fw-bold">EazyPay</h2>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bsbNavbar"
            aria-controls="bsbNavbar"
            aria-label="Toggle Navigation"
          >
            <i className="bi bi-three-dots" />
          </button>
          <div className="collapse navbar-collapse" id="bsbNavbar">
            <ul className="navbar-nav bsb-dropdown-menu-responsive ms-auto align-items-center">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="position-relative pt-1">
                    <i className="bi bi-search" />
                  </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                  <form className="row g-1 px-3 py-2 align-items-center">
                    <div className="col-8">
                      <label
                        className="visually-hidden"
                        htmlFor="inputSearchNavbar"
                      >
                        Search
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSearchNavbar"
                      />
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="position-relative pt-1">
                    <i className="bi bi-globe" />
                  </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-md-end bsb-dropdown-sm bsb-dropdown-animation bsb-fadeIn">
                  <div>
                    <h6 className="dropdown-header fs-7 text-center">
                      Multilingual
                    </h6>
                  </div>
                  <div>
                    <hr className="dropdown-divider mb-0" />
                  </div>
                  <div className="list-group list-group-flush">
                    <Link
                      href="#"
                      className="list-group-item list-group-item-action"
                      aria-current="true"
                    >
                      <div className="ps-3">
                        <div className="fs-7">Arabic</div>
                      </div>
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action "
                      aria-current="true"
                    >
                      <div className="ps-3">
                        <div className="fs-7">English</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
          
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="position-relative pt-1">
                    <i className="bi bi-bell" />
                    <span className="p-1 bg-danger border border-light rounded-circle position-absolute top-0 start-100 translate-middle">
                      <span className="visually-hidden">New Notifications</span>
                    </span>
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                  <li>
                    <h6 className="dropdown-header fs-7 text-center">
                      18 Notifications
                    </h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#!"
                    >
                      <span>
                        <i className="bi bi-envelope-fill me-2" />
                        <span className="fs-7">New Messages</span>
                      </span>
                      <span className="fs-7 ms-auto text-secondary">
                        5 mins
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#!"
                    >
                      <span>
                        <i className="bi bi-file-earmark-fill me-2" />
                        <span className="fs-7">New Reports</span>
                      </span>
                      <span className="fs-7 ms-auto text-secondary">
                        3 days
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item fs-7 text-center" href="#">
                      See All Notifications
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={avatar}
                    width={35}
                    height={35}
                    className="img-fluid rounded-circle"
                    alt="Luke Reeves"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                  <li>
                    <h6 className="dropdown-header fs-7 text-center">
                      Welcome,  Youssef
                    </h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a href="#" className="dropdown-item" aria-current="true">
                      <div className="row g-0 align-items-center">
                        <div className="col-3">
                          <img
                            src={avatar}
                            width={55}
                            height={55}
                            className="img-fluid rounded-circle"
                            alt="Luke Reeves"
                          />
                        </div>
                        <div className="col-9">
                          <div className="ps-3">
                            <div className="text-secondary mt-1 fs-7">
                              Premium Account
                            </div>
                            <div className="text-secondary mt-1 fs-7">
                              email@domain.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <span>
                        <i className="bi bi-person-fill me-2" />
                        <span className="fs-7">View Profile</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <span>
                        <i className="bi bi-bell-fill me-2" />
                        <span className="fs-7">Notifications</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <span>
                        <i className="bi bi-gear-fill me-2" />
                        <span className="fs-7">Settings &amp; Privacy</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <span>
                        <i className="bi bi-question-circle-fill me-2" />
                        <span className="fs-7">Help Center</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="#!">
                      <span>
                        <span className="fs-7">Log Out</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
