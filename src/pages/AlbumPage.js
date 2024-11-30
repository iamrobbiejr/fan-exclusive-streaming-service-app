import React from 'react';
import { useParams } from 'react-router-dom';
import { albums } from '../data/albumsData';
import { songs } from '../data/songsData';
import { artists } from '../data/artistsData';
import SongItem from '../components/SongItem';

const AlbumPage = () => {
  const { id } = useParams();
  const album = albums.find(a => a.id === parseInt(id));
  const albumSongs = songs.filter(s => s.albumId === parseInt(id));
  const artist = artists.find(a => a.id === album.artistId);

  if (!album) {
    return <div>Album not found</div>;
  }

  const handlePlaySong = (song) => {
    // Implement play functionality here
    console.log(`Playing song: ${song.title}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <img src={album.cover} alt={album.title} className="w-48 h-48 object-cover rounded-lg shadow-md mr-8" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{album.title}</h1>
          <p className="text-xl text-gray-600 mb-2">{artist.name}</p>
          <p className="text-gray-500">{album.year} • {albumSongs.length} songs</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {albumSongs.map(song => (
          <SongItem key={song.id} song={song} onPlay={handlePlaySong} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;

