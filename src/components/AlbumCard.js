import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={album.cover} alt={album.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{album.title}</h3>
          <p className="text-gray-600 text-sm">{album.year}</p>
        </div>
      </div>
    </Link>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default AlbumCard;

