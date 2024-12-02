import React from 'react';
import { useParams } from 'react-router-dom';
import { livestreams } from '../data/livestreams';

const LiveStreamPage = () => {
  const { id } = useParams();
  const livestream = livestreams.find(stream => stream.id === parseInt(id));

  if (!livestream) {
    return <div>Livestream not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{livestream.title}</h1>
      <p className="text-xl text-gray-600 mb-6">{livestream.subtitle}</p>
      
      {livestream.status === 'live' ? (
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe title={livestream.title}
            src="https://cdn.pixabay.com/video/2015/08/08/139-135737102_tiny.mp4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      ) : (
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <img
            src={livestream.image}
            alt={livestream.title}
            className="w-full h-96 object-cover"
          />
        </div>
      )}
      
      <div className="bg-gray-100 p-4 rounded-lg shadow-2xl">
        <h2 className="text-xl font-semibold mb-2">Livestream Details</h2>
        <p><strong>Status:</strong> {livestream.status}</p>
        <p><strong>Start Time:</strong> {new Date(livestream.startTime).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default LiveStreamPage;

