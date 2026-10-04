import {useState, useEffect }from 'react';
import pic from '../assets/avatar.jpg';

function Header(){
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
        });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
   const imageStyle = {
       width: '90px',
       height: '90px',
       borderRadius: '50%',
       objectFit: 'cover',
       border: '3px solid var(--accent-blue)',
       boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
    }
    return(
        <>
        <header>
        <div className="header-container">
        <div className="logo">Yusrah <span>Developer</span></div>
      <img src={pic}  alt="Profile Avatar"  style={imageStyle} />
    <nav>
        <a href="about">About</a>
        <a href="skills">Skills</a>
        <a href="project">Project</a>
        <a href="contact">Contact</a>

         {/* Adding dark theme button */}
        <button className="theme-btn" id="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        
    </nav>
         </div>
         </header>
        </>
    )
}

export default Header;