
import logo from "../../assets/images/image.png";
export default function AboutusSection() {
  return (
<>

<section className="main-p ">
  <div className="container">
  <div className="main-title text-center">
                <p className=" py-1 px-3 d-inline-block text-white rounded-pill">About-US</p>
            </div>
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center">
        <img className="img-fluid rounded" loading="lazy" src={logo} alt="About 1" />
      </div>
      <div className="col-12 col-lg-6 col-xl-7  ">
        <div className="row justify-content-xl-center ">
          <div className="col-12 col-xl-11 ">
            <h2 className="mb-3 secondry-color">Who Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">At EasyPay, we understand the challenges faced by public transportation systems when it comes to managing payments. </p>
            <p className="mb-4">Our mission is to simplify and modernize the payment process, making it more efficient and user-friendly for both operators and passengers.</p>
            <button className="btn btn-success py-2 px-3 me-2">
                    Learn More
                  </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}
