import React from 'react';

// routers

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { useContext } from 'react';

// Images
import Logo from '../images/Logo.svg';
import Trending from '../images/Trending.svg';
import Movies from '../images/Movies.svg';
import Series from '../images/Series.svg';
import Bookmarked from '../images/Bookmarked.svg';
import githublogo from '../images/githublogo.png';

function Navbar() {
  return (
        <div className='navbarMySelf w-[96px] h-[960px]'>
            <img src={Logo} alt="Logo" className='cursor-pointer page-logo mt-[20px]' />
            <div className="navlinks">
                <Link to="/trending"><img src={Trending} alt="Trending" className='cursor-pointer logo' /></Link>
                <Link to="/movies"><img src={Movies} alt="Movies" className='cursor-pointer logo' /></Link>
                <Link to="/series"><img src={Series} alt="Series" className='cursor-pointer logo' /></Link>
                <Link to="/bookmarked"><img src={Bookmarked} alt="Bookmarked" className='cursor-pointer logo' /></Link>
            </div>
            <Link to={""}><img src={githublogo} alt="Github" className='github-logo rounded-full' /></Link>
        </div>
  )
}

export default Navbar