import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark text-white shadow-md">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-primary">Uni</span>
            <span className="text-white">Party</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/memories">Memories</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg 
              className="w-6 h-6 fill-current" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/memories" onClick={() => setIsOpen(false)}>Memories</MobileNavLink>
            <MobileNavLink to="/history" onClick={() => setIsOpen(false)}>History</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Desktop NavLink
const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to}
      className="relative font-medium text-gray-200 hover:text-white transition-colors duration-300 group"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  );
};

// Mobile NavLink
const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="w-full text-center py-2 text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800 transition-all duration-300"
    >
      {children}
    </Link>
  );
};

export default Navbar; 