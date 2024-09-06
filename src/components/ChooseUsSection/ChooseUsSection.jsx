import question from '../../assets/images/undraw_online_test_re_kyfx.svg'

export default function ChooseUsSection() {
  return (
 <>
 

 <section className="main-p">
  <div className="container">
    <div className="row gy-5 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-7  ">
        <div className="row justify-content-xl-center ">
          <div className="col-12 col-xl-11 ">
            <h2 className="mb-5 secondry-color">Why Choose Us?</h2>
           <ul className="fs-5">
            <li className='mb-3'><span className='fw-semibold'>Efficiency:</span> Streamline payment collection and reduce manual handling.</li>
            <li className='mb-3'> <span className='fw-semibold'>Convenience:</span> Convenience: Offer passengers multiple options for managing their payments.</li>
            <li className='mb-3'> <span className='fw-semibold'>Security:</span> Security: Utilize secure card payment technology to protect user information.</li>
            <li><span className='fw-semibold'>Accessibility:</span> Provide easy access to recharge points and a flexible app for topping up.</li>
           </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center">
        <img className="img-fluid rounded" loading="lazy" src={question}  alt="About" />
      </div>
    </div>
  </div>
</section>

 </>
  )
}
