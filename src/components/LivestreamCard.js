import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LivestreamCard = ({ livestream }) => {
  return (
    <Link to={`/livestream/${livestream.id}`} className="block">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img src={livestream.image} alt={livestream.title} className="w-full h-52 object-cover" />
        {livestream.status === 'live' && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            LIVE
          </div>
        )}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{livestream.title}</h3>
          <p className="text-gray-600">{livestream.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(livestream.startTime).toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

LivestreamCard.propTypes = {
  livestream: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default LivestreamCard;

