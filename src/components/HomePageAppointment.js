import React , {useState} from 'react'
import userAvatar from "../assets/img/user_avatar.png";
import twIcon from "../assets/img/icon.png";
import { FaCalendarAlt, FaClock, FaCircle } from 'react-icons/fa';

const salon = {
  name: 'White Rabbit Salon',
  service: 'Haircut and fast blow dry',
  date: '13/12/2021',
  time: '15:30',
  payment: 'Pay at the venue'
}

function HomePageAppointment() {
  [userName,setUserName] = useState('Arlene')
  return (
    <div className="appointment-section" id="appointment-section">
      <div className='user-appointments-section'>
        <div className='hey-user'>
          <img className="user-avatar" alt="userAvatar" src={userAvatar} />
          <span className="user-greeting">Hey,
            <span className="user-name">{` `+userName}</span>
          ! </span>
        </div>
        <div className="next-appointment">Your next appointment</div>
        <div className='appointment-details-card'>
          <div className="appointment-time-venue">
            <div><FaCalendarAlt/> <span>{salon.date}</span></div>
            <div><FaClock/> <span>{salon.time}</span></div>
            <div><span className="pay"><FaCircle/> </span><span>{salon.payment}</span></div>
          </div>

          <div className='salon-details'>
            <div>
              <div className='salon-name'>{salon.name}</div>
              <div className='salon-service'>{salon.service}</div>
            </div>
            <img className="twIcon" alt="twIcon" src={twIcon} />
          </div>
          <button className='btn appointment-details-btn'>See Details</button>
        </div>
      </div>
    </div>
  )
}

export default HomePageAppointment