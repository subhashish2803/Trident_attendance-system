import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#245064] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Top Footer Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-500 pb-6">
          {/* Logo */}
          <div className="w-1/4">
            <Link to="/" title="Home" rel="home">
              <img
                src="https://tat.ac.in/wp-content/themes/tat/images/footer_logo.png"
                alt="Home"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="w-1/4 flex justify-end space-x-4">
            <a href="https://www.facebook.com/tridentcollege/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook text-2xl"></i>
            </a>
            <a href="https://wa.me/919861191195" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Middle Footer Section */}
        <div className="flex flex-wrap mt-6">
          {/* About Section */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-bold mb-4">ABOUT US</h2>
            <p className="text-sm">
              Trident Academy of Technology, a name that has become a brand in the field of technical education, is
              today synonymous with excellence. Within just a few years of its establishment, Trident group of
              institutions has built an image worth the quality of education it imparts.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-bold mb-4">QUICK LINKS</h2>
            <ul className="text-sm space-y-2">
              <li><Link to="/training/cisco-thingqbator">CISCO thingQbator</Link></li>
              <li><Link to="/academics/learning-resources">Learning Resources</Link></li>
              <li><Link to="/placement/tcs-track">TCS Track</Link></li>
              
              <li><Link to="/activities/entrepreneurship">IEDC Cell</Link></li>
              <li><Link to="/placement/placement-statistics">Placement Statistics</Link></li>
              
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-bold mb-4">GET IN TOUCH</h2>
            <p className="text-sm flex items-center">
              <i className="fa fa-map-marker mr-2"></i> F-2, Chandaka Industrial Estate, In front of Infocity, Bhubaneshwar, Odisha - 751024
            </p>
            <p className="text-sm flex items-center mt-2">
              <i className="fa fa-envelope mr-2"></i> info@trident.ac.in
            </p>
            <p className="text-sm flex items-center mt-2">
              <i className="fa fa-phone mr-2"></i> 0674-3530517, 9861191195
            </p>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="text-center mt-6 border-t border-gray-500 pt-4">
          <p className="text-sm">© 2016 - TRIDENT ACADEMY OF TECHNOLOGY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
