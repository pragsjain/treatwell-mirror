import React , {useState} from 'react'
import Salon from "./Salon.js";

const services=['Hair',"Nail","Wellness"];

function HomePageBooking() {
  [selectedService, setSelectedService] = useState('Hair');

  return (
    <>
    <div className="booking-section" id="booking-section">
        <div className="booking-headlines">
        <div className="heading">Ready to book again?</div>
        <div className="sub-heading">Salons are waiting for you!</div>
        </div>
        <div className="typesOfservice">
            {
                services.map((service, index)=>{
                    return(
                        <div
                        key={index}
                        className={`service ${selectedService==service ? "active" : ""}`}
                        onClick= {() => setSelectedService(service)}
                        >{service}</div>
                    )
            })
            }

        </div>
        <div className="salon-list">
           {Array(10).fill('').map((e,index)=><Salon key={index}/>)}
        </div>
    </div>
    </>
  )
}

export default HomePageBooking