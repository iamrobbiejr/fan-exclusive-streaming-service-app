import React from 'react';
import { artists } from '../data/artistsData';
import ArtistCard from '../components/ArtistCard';

const VideosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-gray-900 font-bold mb-8">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;

