import React, { useState} from 'react'
import { FaHome, FaRegHeart, FaCalendarAlt, FaUser } from 'react-icons/fa';
import SearchLocation from "../assets/img/search-location.svg";
import SearchTime from "../assets/img/search-time.svg";
import SearchService1 from "../assets/img/search-service-1.svg";
import SearchService2 from "../assets/img/search-service-2.svg";
import SearchService3 from "../assets/img/search-service-3.svg";
import SearchService4 from "../assets/img/search-service-4.svg";
import SearchIconClose from "../assets/img/search-icon-close.svg";
import { useNavigate } from "react-router-dom";

function search() {
    [searchLocation,setSearchLocation]= useState('');
    [searchTime,setSearchTime]= useState('');
    let navigate = useNavigate();
    function handleChangeLocation(event) {
        setSearchLocation(event.target.value)
    }
    function handleChangeTime(event) {
        setSearchTime(event.target.value)
    }
    function redirectToHome(){
        navigate("/");
    }
  return (
    <>
    <div className="search-page">
        <div className="top-heading">
            <div className="search">Search</div>
            <img className="search-icon-close" alt="SearchIconClose" src={SearchIconClose} onClick={redirectToHome}/>
        </div>
        <div className="search-services">
            <div class="service">
                <img className="search-service-icon" alt="SearchService1" src={SearchService1} />
                <div>Hair</div>
            </div>
            <div class="service">
                <img className="search-service-icon" alt="SearchService2" src={SearchService2} />
                <div>Nails</div>
            </div>
            <div class="service">
                <img className="search-service-icon" alt="SearchService3" src={SearchService3} />
                <div>Hair Removal</div>
            </div>
            <div class="service">
                <img className="search-service-icon" alt="SearchService4" src={SearchService4} />
                <div>Body Polishing</div>
            </div>
        </div>
        <div className="search-detail">
            <input placeholder={`Which area or city?`}
            type="search"
            className="search-loc"
            style={searchLocation?{backgroundImage: "none"}: { backgroundImage: `url(${SearchLocation})` }}
            value ={searchLocation}
            onChange={handleChangeLocation}
            ></input><br/>

            <input placeholder={`When you want to go?`}
            type="search"
            className="search-time"
            style={searchTime?{backgroundImage: "none"}: { backgroundImage: `url(${SearchTime})` }}
            value ={searchTime}
            onChange={handleChangeTime}
            ></input>
        </div>
        <button class="search-btn">Search</button>
    </div>
    </>
  )
}

export default search