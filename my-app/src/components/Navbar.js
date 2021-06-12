import React,  { Component } from 'react'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <>
                <div className="navbar">
                    <Link to="#" className='menu'>
                        <FaIcons.FaBars/>
                    </Link>
                </div>
                {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        
                    </ul>
                </nav> */}
            </>    
    
        )
    }
  }

export default Navbar;