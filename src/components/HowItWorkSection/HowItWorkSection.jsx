import card from '../../assets/images/undraw_plain_credit_card_re_c07w.svg'
import logo from "../../assets/images/image.png";
export default function HowItWorkSection() {
  return (
   <>

<section className="main-p ">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-7  ">
        <div className="row justify-content-xl-center ">
          <div className="col-12 col-xl-11 ">
            <h2 className="mb-3 secondry-color">Who Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">At EasyPay, we understand the challenges faced by public transportation systems when it comes to managing payments. </p>
            <p className="mb-4">Our mission is to simplify and modernize the payment process, making it more efficient and user-friendly for both operators and passengers.</p>
          
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center">
        <img className="img-fluid rounded" loading="lazy" src={logo} alt="About 1" />
      </div>
    </div>
  </div>
</section>

<section className="main-p">
  <div className="container">
    <div className="row gy-5 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center">
        <img className="img-fluid rounded" loading="lazy" src={card}  alt="About 1" />
      </div>
      <div className="col-12 col-lg-6 col-xl-7  ">
        <div className="row justify-content-xl-center ">
          <div className="col-12 col-xl-11 ">
            <h2 className="mb-3 secondry-color">How it work ?</h2>
            <p className="lead fs-4 text-secondary mb-3">Our device, installed in public transport vehicles, accepts payments through various cards with ease. This ensures a smooth and hassle-free experience for passengers. </p>
            <p className="lead fs-4 text-secondary mb-3">To ensure convenience, our payment cards can be recharged at fixed points located in transportation hubs and stations. Additionally, passengers can recharge their cards through our user-friendly mobile app. </p>
           <ol className="fs-5">
            <li>Get the card</li>
            <li>Charge it from fixed points or through app</li>
            <li>Use your card in payments</li>
           </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   </>
  )
}
