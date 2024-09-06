import logo from "../../assets/images/image.png";
export default function Register() {
  return (
    <>
    <br />
    <br />
<section className="main-p bg-body-tertiary">
  <div className="container">
    <div className="row gy-4 align-items-center">
      <div className="col-12 col-md-6 col-xl-7">
        <div className="d-flex justify-content-center ">
          <div className="col-12 col-xl-9  ">
         <div className="image d-flex justify-content-center">
               <img className="img-fluid rounded mb-4" loading="lazy" src={logo} width={245} height={80} alt="Easypay Logo" />
         </div>
            <hr className="border-primary-subtle mb-4" />
            <h2 className="h1 mb-4 secondry-color">We make digital products that drive you to stand out.</h2>
            <p className="lead mb-5">We write words, take photos, make videos, and interact with artificial intelligence.</p>
            <div className="text-endx">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-5">
        <div className="card border-0 rounded-4">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-4">
                  <h2 className="h3 secondry-color">Registration</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                </div>
              </div>
            </div>
            <form action="#!" >
              <div className="row gy-3 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Name" id="Name" placeholder="Name" required />
                    <label htmlFor="Name" className="form-label">Name</label>
                  </div>
                </div>
             
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="phone" id="phone"  placeholder="phone" required />
                    <label htmlFor="phone" className="form-label">Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" id="password"  placeholder="" required />
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="repassword" className="form-control" name="repassword" id="repassword"  placeholder="" required />
                    <label htmlFor="repassword" className="form-label">Re-Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue name="iAgree" id="iAgree" required />
                    <label className="form-check-label text-secondary" htmlFor="iAgree">
                      I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                  <p className="m-0 text-secondary text-center">Already have an account? <a href="#!" className="link-primary text-decoration-none">Sign in</a></p>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
