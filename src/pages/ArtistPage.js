import React from 'react';
import { useParams } from 'react-router-dom';
import { artists } from '../data/artistsData';
import { videos } from '../data/videosData';
import VideoCard from '../components/VideoCard';

const ArtistPage = () => {
  const { id } = useParams();
  const artist = artists.find(a => a.id === parseInt(id));
  const artistVideos = videos.filter(v => v.artistId === parseInt(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <img src={artist.avatar} alt={artist.name} className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h1 className="text-3xl font-bold">{artist.name}</h1>
          <p className="text-gray-600">{artist.genre}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artistVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;

