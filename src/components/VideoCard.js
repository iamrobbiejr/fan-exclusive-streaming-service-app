import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{video.title}</h3>
          {video.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default VideoCard;

