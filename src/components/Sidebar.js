import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, Music2, Video, Radio, Ticket, Store, User, MessageSquare, LogOut } from 'lucide-react';
import PropTypes from "prop-types";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Music2, label: 'All Music', path: '/music' },
    { icon: Video, label: 'Videos', path: '/videos' },
    { icon: Radio, label: 'Livestream', path: '/livestreams' },
    { icon: Ticket, label: 'Tickets', path: '/tickets' },
    { icon: Store, label: 'Store', path: '/store' },
    { icon: User, label: 'My Account', path: '/account' },
    { icon: MessageSquare, label: 'ChatRooms', path: '/chat' },
  ];

  return (
      <>
        {/* Overlay */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}/>

        {/* Sidebar */}
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-amber-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-4">
              <Link to="/" className="flex items-center space-x-2">
                <img className="w-2/3 h-30" src="/images/logo.png" alt="SEAL logo"/>
              </Link>
            </div>

            {/* User Info */}
            <div className="p-4 m-2 rounded-lg border-2 border-amber-300">
              <div className="text-sm text-gray-600">John Doe</div>
              <div className="text-xs text-gray-500">john@example.com</div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="p-2">
                {menuItems.map((item, index) => (
                    <li key={item.label}>
                      <Link
                          to={item.path}
                          className={`flex items-center space-x-2 p-2 rounded-lg ${
                              location.pathname === item.path
                                  ? 'bg-gray-100 text-amber-600'
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-amber-600'
                          }`}
                          onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-amber-200">
              <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-amber-600"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
