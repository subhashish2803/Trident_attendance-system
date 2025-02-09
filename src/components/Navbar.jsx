import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#245064] p-4 text-white flex justify-between items-center fixed top-0 w-full z-50 transition-shadow duration-300 ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      {/* Logo */}
      <div className="lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/2">
        <Link to="/" title="Home" rel="home" id="logo" className="logo">
          <img 
            src="https://tat.ac.in/wp-content/themes/tat/images/tat_logo.png" 
            alt="Home" 
            className="w-30 h-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4 mb-2">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/attendance" className="hover:text-blue-500">Attendance</Link></li>
        <li><Link to="/resources" className="hover:text-blue-500">Placement Resource Hub</Link></li>
        <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white md:hidden">
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
            <FiX size={30} />
          </button>
          <Link to="/" className="text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/attendance" className="text-lg" onClick={() => setIsOpen(false)}>Attendance</Link>
          <Link to="/resources" className="text-lg" onClick={() => setIsOpen(false)}>Placement Resource Hub</Link>
          <Link to="/about" className="text-lg" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}

      {/* Ragging Notice */}
      <div className="absolute bottom-0 right-4">
        <a href="http://trident.ac.in/maintain/public-notice-for-curbing-the-menace-of-ragging/" target="_blank" rel="noopener noreferrer">
          <img
            src="http://tat.ac.in/wp-content/uploads/2017/08/ragging.gif"
            alt="Anti-Ragging Notice"
            className="w-24 h-auto"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
