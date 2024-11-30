import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artistsData';
import { albums } from '../data/albumsData';
import { songs } from '../data/songsData';
import ArtistCard from '../components/ArtistCard';
import AlbumCard from '../components/AlbumCard';
import SongItem from '../components/SongItem';

const MusicPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 10;

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePlaySong = (song) => {
    // Implement play functionality here
    console.log(`Playing song: ${song.title}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Music</h1>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Featured Artists</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.slice(0, 4).map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Featured Albums</h2>
          <Link to="/albums" className="text-blue-600 hover:underline">View All Albums</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.slice(0, 4).map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">All Songs</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {currentSongs.map(song => (
            <SongItem key={song.id} song={song} onPlay={handlePlaySong} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: Math.ceil(songs.length / songsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicPage;

