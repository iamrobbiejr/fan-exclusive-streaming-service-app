import React from 'react';
import { albums } from '../data/albumsData';
import AlbumCard from "../components/AlbumCard";

const Albums = (props) => {


  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl text-gray-900 font-bold mb-8">All Albums</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {albums.map(album => (
                  <AlbumCard key={album.id} album={album} />
              ))}
          </div>
      </div>
  )
};

export default Albums;