import mockup2 from "../../assets/images/71shots_so.png";
export default function FeauturesSection() {
  return (
    <>
      <section className="feautures main-p ">
        <div className="container ">
          <div className="main-title text-center">
            <p className=" py-1 px-3 d-inline-block text-white rounded-pill">
              Feautures
            </p>
          </div>
          <div className="row gy-3  align-items-center">
            <div className="col-md-4">

              <div className="row ">
                <div className=" col-lg-2 ">
                 <div className="icon text-center align-content-center">
                   <i className="fa-solid fa-money-bill fa-lg"></i>
                 </div>
                </div>
                <div className="text  col-lg-10">
                  <h5 className="p-0 m-0">Total Balance</h5>
                  <p>
                    Keep track of your balance and transactions in real-time.
                  </p>
                </div>
              </div>

              <div className="row mt-5 ">
                <div className="col-lg-2 ">
               <div className="icon text-center align-content-center">
                   <i className="fa-solid fa-ticket fa-lg"></i>
               </div>
                </div>
                <div className="text col-lg-10">
                  <h5 className="p-0 m-0">Offers</h5>
                  <p>Exclusive deals and discounts on rides and recharges.</p>
                </div>
              </div>

              <div className="row mt-5 ">
                <div className=" col-lg-2 ">
               <div className="icon text-center align-content-center">
                   <i className="fa-solid fa-sack-dollar fa-lg"></i>
               </div>
                </div>
                <div className="text col-lg-10">
                  <h5 className="p-0 m-0">Payment & Recharge</h5>
                  <p>Instant payment and recharge options</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 overflow-hidden">
              <div className="image">
                <img src={mockup2} alt="mockup" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className=" col-lg-2 ">
                 <div className="icon text-center align-content-center">
                   <i className="fa-solid fa-receipt"></i>
                 </div>
                </div>
                <div className="text col-lg-10">
                  <h5 className="p-0 m-0">Payment History</h5>
                  <p>Detailed logs of all your transactions.</p>
                </div>
              </div>

              <div className="row mt-5 ">
                <div className="col-lg-2">
                <div className="icon text-center align-content-center">
                    <i className="fa-solid fa-circle-exclamation fa-lg"></i>
                </div>
                </div>
                <div className="text col-12 col-lg-10">
                  <h5 className="p-0 m-0">Report a Problem</h5>
                  <p>
                    Easily report any issues with your payments or app usage.
                  </p>
                </div>
              </div>

              <div className="row mt-5 ">
                <div className=" col-lg-2 ">
                <div className="icon text-center align-content-center">
                    <i className="fa-solid fa-wallet fa-lg"></i>
                </div>
                </div>
                <div className="text col-12 col-lg-10">
                  <h5 className="p-0 m-0">Multiple Payment Methods:</h5>
                  <p>
                    upport for various payment options including credit/debit
                    cards and digital wallets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
