import internet from "../assets/svg/internet.svg"
import Library from "../assets/svg/Library.svg"
import Epub from "../assets/svg/epub.svg"
import Customer from "../assets/svg/customer.svg"
import "../style/FeatureBanner.css"


export default function  FeatureBanner(){
    return(
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center  p-3 featuer-banner-conatiner">
                <div className="row d-flex  justify-content-center align-items-center ">
                    <div className="col-12 col-lg-3 col-sm-4 d-flex gap-3">
                        <div className="">
                            <img src={internet} alt="" className="feature-img" />
                        </div>
                        <div className="feature-text">
                            <h4>Fully Digital</h4>
                            <p>Get eBooks from anywhere</p>              
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-3 col-sm-4 d-flex gap-3">
                        <div className="">
                            <img src={Library} alt="" className="feature-img" />
                        </div>
                        <div className="feature-text">
                            <h4>Constant Updates</h4>
                            <p>New books always available</p>              
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-3 col-sm-4 d-flex gap-3">
                        <div className="">
                            <img src={Epub} alt="" className="feature-img" />
                        </div>
                        <div className="feature-text">
                            <h4>Epub Support</h4>
                            <p>Enjoy books with the features of Epub</p>              
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-3 col-sm-4 d-flex gap-3">
                        <div className="">
                            <img src={Customer} alt="" className="feature-img" />
                        </div>
                        <div className="feature-text">
                            <h4>24/7 Support</h4>
                            <p>Our team is always available to assit you</p>              
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}