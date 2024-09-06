import avatar from "../../assets/images/avatar-svgrepo-com.svg";
export default function TestimonialSection() {
  return (
    <>
      <section className="main-p testimonial">
        <div className="container">
            <div className="main-title text-center">
                <p className="bg-main py-1 px-3 d-inline-block text-white rounded-pill">Testimonilas</p>
            </div>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                Happy Customers
              </h2>
              <p className="display-5 mb-4 mb-md-5 text-center secondry-color">
                We deliver what we promise. See what clients are expressing
                about us.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
          <div className=" overflow-hidden">
            <div className="row gy-4 gy-md-0 gx-xxl-5">
              <div className="col-12 col-md-4">
                <div className="card border-0 border-bottom border-success shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <figure>
                      <img 
                      style={{width:110}}
                        className="img-fluid rounded rounded-circle mb-4 border border-5"
                        loading="lazy"
                        src={avatar}
                        alt="Luna John"
                      />
                      <figcaption>
                        <div className="text-warning">
                          <div>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star-half-stroke" />
                          </div>
                        </div>
                        <blockquote className="mb-4">
                          We were so impressed with the work they did for us.
                          They were able to take our vision and turn it into a
                          reality, and they did it all on time and within
                          budget. We would highly recommend them to anyone
                          looking for a reliable partner.
                        </blockquote>
                        <h4 className="mb-2">Luna John</h4>
                        <h5 className="fs-6 text-secondary mb-0">
                          UX Designer
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card border-0 border-bottom border-success shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <figure>
                      <img 
                      style={{width:110}}
                        className="img-fluid rounded rounded-circle mb-4 border border-5"
                        loading="lazy"
                        src={avatar}
                        alt="Luna John"
                      />
                      <figcaption>
                        <div className="text-warning">
                          <div>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star-half-stroke" />
                          </div>
                        </div>
                        <blockquote className="mb-4">
                          We were so impressed with the work they did for us.
                          They were able to take our vision and turn it into a
                          reality, and they did it all on time and within
                          budget. We would highly recommend them to anyone
                          looking for a reliable partner.
                        </blockquote>
                        <h4 className="mb-2">Luna John</h4>
                        <h5 className="fs-6 text-secondary mb-0">
                          UX Designer
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card border-0 border-bottom border-success shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <figure>
                      <img 
                      style={{width:110}}
                        className="img-fluid rounded rounded-circle mb-4 border border-5"
                        loading="lazy"
                        src={avatar}
                        alt="Luna John"
                      />
                      <figcaption>
                        <div className="text-warning">
                          <div>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star-half-stroke" />
                          </div>
                        </div>
                        <blockquote className="mb-4">
                          We were so impressed with the work they did for us.
                          They were able to take our vision and turn it into a
                          reality, and they did it all on time and within
                          budget. We would highly recommend them to anyone
                          looking for a reliable partner.
                        </blockquote>
                        <h4 className="mb-2">Luna John</h4>
                        <h5 className="fs-6 text-secondary mb-0">
                          UX Designer
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
