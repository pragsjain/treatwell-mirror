import React,{useState} from 'react'
import salonImg from "../assets/img/salon_img.png"
import discount from "../assets/img/discount.png"
import { FaStar } from 'react-icons/fa';

salon ={
    name:'Nynphea Spa di Luca Aloisi e Mario Liti Caputo',
    address:'Via Santa Trinità, 22  - Milano',
    distance:'1,3 km',
    rating:'4.7',
    reviews:'171',
    isTopRated:true,
    isOffPeak: true
}

function Salon() {
[salon,setSalon] = useState(salon)
  return (
    <div className="salon-card">
        <img className="salon-img" alt="userAvatar" src={salonImg} />
        <div className="salon-desc">
            <div className="salon-name">{salon.name}</div>
            <div className="salon-address sm-text">{salon.address}<b>({` `+salon.distance})</b></div>
            <div className="review-rating sm-text">
                <span className="salon-rating">
                    <FaStar/>
                </span>{salon.rating}
                <span className="reviews">{`    `+salon.reviews} {` `}reviews
                </span>
            </div>
            <div className="salon-features">
                { salon.isTopRated == true? (<div className="btn-look">Top rated 2020</div>):(<h1>nooo</h1>)}
                <div className="feature"><img className="discount" alt="discount" src={discount} />{ salon.isOffPeak == true && (<span>{` `}Off peak</span>)}</div>
            </div>
        </div>
    </div>
  )
}

export default Salon