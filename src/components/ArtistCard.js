import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtistCard = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={artist.avatar} alt={artist.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{artist.name}</h3>
          <p className="text-gray-600 text-sm">{artist.genre}</p>
          <p className="text-gray-500 text-sm mt-2">{artist.videoCount} videos</p>
        </div>
      </div>
    </Link>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    videoCount: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistCard;

