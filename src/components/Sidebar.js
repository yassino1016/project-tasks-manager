import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFolder, faCalendar, faPlane, faUsers, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <aside>
      <div className='aside-content'>
        <div className='sidebar-item'>
          <Link to="/">
            <FontAwesomeIcon icon={faTachometerAlt} className='icon' />
            Dashboard
          </Link>
        </div>
        <div className='sidebar-item'>
          <Link to="/projects">
             <FontAwesomeIcon icon={faFolder} className='icon' />
            Projects
          </Link>
        </div>
        <div className='sidebar-item'>
           <Link to="/calendar">
            <FontAwesomeIcon icon={faCalendar} className='icon' />
            Calendar
          </Link>
        </div>
        <div className='sidebar-item'>
          <Link to="/Vacations">
            <FontAwesomeIcon icon={faPlane} className='icon' />
            Vacations
          </Link>
        </div>
        <div className='sidebar-item'>
          <Link to="/Staff">
            <FontAwesomeIcon icon={faUsers} className='icon' />
            Staff
          </Link>
        </div>
        <div className='sidebar-item'>
          <Link to="/Messenger"> 
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            Messenger
          </Link>
        </div>
        <div className='sidebar-item'>
          <Link to="/Info">
            <FontAwesomeIcon icon={faInfoCircle} className='icon' />
            Info Portal
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
