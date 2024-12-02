import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm mb-4">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            {index > 0 && <span className="text-gray-400">/</span>}
            <li className="flex items-center space-x-2">
              {item.href ? (
                <Link 
                  to={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-900">{item.name}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ).isRequired
};

export default Breadcrumb;

