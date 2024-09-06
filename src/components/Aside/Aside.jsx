
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/image.png";

export default function Aside() {
  return (
<>
 {/* Aside */}
<aside className="bsb-sidebar-1 offcanvas offcanvas-start" tabIndex={-1} id="bsbSidebar1" aria-labelledby="bsbSidebarLabel1">
  <div className="offcanvas-header">
    <a className="sidebar-brand" href="#!">
      <img src={logo} id="bsbSidebarLabel1" className="img-fluid" alt="BootstrapBrain Logo" width={90} height={44} />
    </a>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body pt-0">
    <hr className="sidebar-divider mb-3" />
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link p-3 active bg-light rounded" data-bs-toggle="collapse" href="#dashboardExamples" role="button" aria-expanded="true" aria-controls="dashboardExamples">
          <div className="nav-link-icon text-primary">
            <i className="bi bi-house-gear" />
          </div>
          <span className="nav-link-text fw-bold">Dashboards</span>
        </a>
        <div className="collapse " id="dashboardExamples">
          <ul className="nav flex-column ms-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                <div className="nav-link-icon text-primary-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Default</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-primary-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Sales</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-primary-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Marketing</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-primary-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Directory</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-primary-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Analytic</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item mt-3">
        <h6 className="py-1 text-secondary text-uppercase fs-7">Pages</h6>
      </li>
      <li className="nav-item">
        <a className="nav-link p-3" data-bs-toggle="collapse" href="#pageExamples" role="button" aria-expanded="false" aria-controls="pageExamples">
          <div className="nav-link-icon text-danger">
            <i className="bi bi-folder" />
          </div>
          <span className="nav-link-text fw-bold">Pages</span>
        </a>
        <div className="collapse" id="pageExamples">
          <ul className="nav flex-column ms-4">
          <li className="nav-item">
              <NavLink to='/' className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-danger-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-danger-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-danger-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Profile</span>
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-danger-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-danger-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Invoice</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-danger-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Pricing</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link p-3" data-bs-toggle="collapse" href="#authExamples" role="button" aria-expanded="false" aria-controls="authExamples">
          <div className="nav-link-icon text-success">
            <i className="bi bi-gear" />
          </div>
          <span className="nav-link-text fw-bold">Authentication</span>
        </a>
        <div className="collapse" id="authExamples">
          <ul className="nav flex-column ms-4">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-success-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Sign In</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/register' className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-success-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Sign Up</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="#!">
                <div className="nav-link-icon text-success-emphasis">
                  <i className="bi bi-arrow-right-short" />
                </div>
                <span className="nav-link-text">Reset Password</span>
              </a>
            </li>
        
          </ul>
        </div>
      </li>
    </ul>
  </div>
</aside>

</>
  )
}
