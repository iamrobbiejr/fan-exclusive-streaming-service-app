import React from 'react';
import { useParams } from 'react-router-dom';
import { artists } from '../data/artistsData';
import { albums } from '../data/albumsData';
import { songs } from '../data/songsData';
import AlbumCard from '../components/AlbumCard';
import SongItem from '../components/SongItem';

const ArtistMusicPage = () => {
  const { id } = useParams();
  const artist = artists.find(a => a.id === parseInt(id));
  const artistAlbums = albums.filter(a => a.artistId === parseInt(id));
  const artistSongs = songs.filter(s => s.artistId === parseInt(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const handlePlaySong = (song) => {
    // Implement play functionality here
    console.log(`Playing song: ${song.title}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <img src={artist.avatar} alt={artist.name} className="w-60 h-60 rounded-full mr-4" />
        <div>
          <h1 className="text-3xl font-bold">{artist.name}</h1>
          <p className="text-gray-600">{artist.genre}</p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artistAlbums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Songs</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {artistSongs.map(song => (
            <SongItem key={song.id} song={song} onPlay={handlePlaySong} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistMusicPage;

