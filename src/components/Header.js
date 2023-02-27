import React, {useEffect, useState} from 'react'
import HeaderBackground from "../assets/img/Background_pattern.svg";
import Logo from "../assets/img/logo.svg";
import Search from "../assets/img/search.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  [searchText,setSearchText]= useState('');
  [isScrolled,setIsScrolled]= useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("appointment-section");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        setIsScrolled(true);
        document.getElementById('header')?.classList.add('sticky')
      } else {
        setIsScrolled(false);
        document.getElementById('header')?.classList.remove('sticky')
      }
    }
  }, [])

  function handleChange(event) {
    setSearchText(event.target.value)
  }

  function redirectToSearch(){
    navigate("/search");
  }

  return (
    <>
    {/* if scrolled */}
    {isScrolled && <div className="header" id="header"
    style={{background: '#4036ED'}}>
      <div className='header-section'>
        {!isScrolled &&
          <img className="logo" alt="logo" src={Logo} />}
        <input placeholder={`     Find your next treatment`}
        type="search"
        className="header-search"
        style={searchText?{backgroundImage: "none"}: { backgroundImage: `url(${Search})` }}
        value ={searchText}
        onChange={handleChange}
        onFocus={redirectToSearch}
        ></input>
      </div>
    </div>
    }

    {/* if not scrolled */}
    {!isScrolled && <div className="header" id="header"
        style={{backgroundImage:`url(${HeaderBackground})`}}>
          <div className='header-section'>
        {!isScrolled &&
          <img className="logo" alt="logo" src={Logo} />}
        <input placeholder={`      Find your next treatment`}
        type="search"
        className="header-search"
        style={searchText?{backgroundImage: "none"}: { backgroundImage: `url(${Search})` }}
        value ={searchText}
        onChange={handleChange}
        onFocus={redirectToSearch}
        ></input>
      </div>
    </div>
    }
    </>
  )
}

export default Header