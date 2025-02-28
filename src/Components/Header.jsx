import '../styles.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaUser } from "react-icons/fa";

export default function Header(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  // function for showing small screen menu modal 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
          return localStorage.getItem("theme") === "dark";
        }
        return false;
      });
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

    return(
        <div className='header flex justify-start'>
<Link to="/" className="logo text-5xl mb-5 font-extrabold text-amber-300 dark:text-white bg-clip-text transition-all hover:scale-105 hover:text-yellow-300 mr-20">
  <h1 className='mb-5'>MemeVerse   </h1>
</Link>

<div className='headerbutton mt-3 hideon400'>
           <Link to='/'><span className='headerlink mt-3'>Home</span></Link> 
           <Link to='/meme-upload'><span className='headerlink ml-10 mt-3'>Upload Meme</span></Link> 
           <Link to="/meme-explorer" >
  <span className='headerlink ml-10 mt-3'>Explore </span>
</Link>

<Link to="/profile" >
  <span className='headerlink ml-10 mt-3'><FaUser className='inline mr-2'/>Profile</span>
</Link>

<Link to="/leaderboard" > 
  <span className='headerlink ml-10 mt-3'><FaTrophy className='inline text-yellow-300' / > Leaderboard </span>
</Link>

</div>


 {/* small screen menu  */}

 <div className="smallmenu hideonbigforsmall">
        {/* Hamburger Icon */}
        <div className="hamburger hideonbigforsmall" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Modal Menu */}
        {isMenuOpen && (
          <div className="modal dark:bg-black dark:border-2 dark:border-amber-50 dark:text-white">
            <div className="modal-content dark:bg-black dark:border-2 dark:border-amber-50 dark:text-white">

              {/* Menu Items */}
              <ul className="menu-items  dark:bg-black dark:border-2 dark:border-amber-50 dark:text-white">
                <li onClick={toggleMenu}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/meme-upload">Upload Meme</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/meme-explorer">Explore</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/profile"><FaUser className='inline mr-2'/>Profile</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/leaderboard"><FaTrophy className='inline text-yellow-300' / > Leaderboard </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>



 {/* dark mode button  */}
 <button
      onClick={() => setDarkMode(!darkMode)}
      className="darkmodebutton absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg shadow-md transition-all"
    >
      {darkMode ? <div className='darkmodeicon'>☀️ <span className='hideon400'>Light Mode  </span></div> : <div className='darkmodeicon'> 🌙 <span className='hideon400'>Dark Mode </span></div>}
    </button>
        </div>
    )
}