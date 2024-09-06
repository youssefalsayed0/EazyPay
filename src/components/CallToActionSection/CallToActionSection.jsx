import call from '../../assets/images/hero-6-img.png'

export default function CallToActionSection() {
  return (
<>

<section className=" sec-background  main-p" >
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 col-md-5">
        <div className=" mb-lg-0 mb-md-5 mb-5 pb-lg-0 pb-md-5">
          <h1 className="text-light font-weight-medium mb-4 pb-1">Revolutionize Payment Collection with Us
          </h1>
          <p className="text-white-50 mb-4 pb-2" style={{fontSize: 16}}>Discover a smarter way to handle payments in public transportation. Our cutting-edge solution simplifies payment processes and enhances convenience for both operators and passengers. Whether you're looking to modernize your current system or implement a new one, we're here to help you take that crucial step.</p>
          <a className="btn btn-success" href="#contact">Join Now</a>
        </div>
      </div>
      <div className="col-lg-6 offset-lg-1 col-md-7">
        <img alt="call to action image" className="img-fluid rounded" src={call} />
      </div>
    </div>
  </div>
</section>


</>
  )
}
