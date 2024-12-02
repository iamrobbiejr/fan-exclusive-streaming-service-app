import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PropTypes from "prop-types";
import CartIcon from "./CartIcon";

const Header = ({ setIsOpen }) => {
  const { authUser } = useAuth();

  return (
      <header className="bg-transparent text-gray-800 fixed w-full z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link to="/" className="lg:hidden p-4 items-center space-x-2">
                  <img className="w-full h-10" src="/images/logo.png" alt="SEAL logo"/>
              </Link>
              <div className="flex items-center">
                  {authUser && (
                      <div className="flex items-center space-x-2 sm:space-x-4">
                          <span className="lg:hidden">
                                  <CartIcon/>
                          </span>

                          <button
                              onClick={() => setIsOpen(prev => !prev)}
                              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
                          >
                              <Menu className="w-6 h-6"/>
                          </button>
                      </div>

                  )}
              </div>
              <div className="lg:flex items-center mx-24 hidden ">
                  {authUser &&  <CartIcon/> }
              </div>
          </div>
      </header>
  );
};

export default Header;


Header.propTypes = {
    setIsOpen: PropTypes.func.isRequired
};
