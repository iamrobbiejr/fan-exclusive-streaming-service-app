import React from 'react';
import PropTypes from 'prop-types';
import { Play } from 'lucide-react';

const SongItem = ({ song, onPlay }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100">
      <div>
        <h3 className="font-semibold">{song.title}</h3>
        <p className="text-sm text-gray-600">{song.duration}</p>
      </div>
      <button onClick={() => onPlay(song)} className="p-2 rounded-full hover:bg-gray-200">
        <Play size={20} />
      </button>
    </div>
  );
};

SongItem.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default SongItem;

