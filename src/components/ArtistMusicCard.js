import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtistMusicCard = ({ artist }) => {
  return (
    <Link to={`/artist-music/${artist.id}`} className="block">
      <div className="bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
        <img src={artist.avatar} alt={artist.name} className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{artist.name}</h3>
          <p className="text-gray-600 text-sm">{artist.genre}</p>
        </div>
      </div>
    </Link>
  );
};

ArtistMusicCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistMusicCard;

