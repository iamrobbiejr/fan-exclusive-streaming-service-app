import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../data/videosData';
import VideoCard from '../components/VideoCard';

const VideoPlayerPage = () => {
  const { id } = useParams();
  const video = videos.find(v => v.id === parseInt(id));
  const randomVideos = videos
    .filter(v => v.id !== parseInt(id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <iframe title={video.title}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <h2 className="text-2xl font-bold mb-4">More Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {randomVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerPage;

