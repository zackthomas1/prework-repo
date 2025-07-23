import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatorCard({ creator }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      {creator.imageURL ? (
        <img 
          src={creator.imageURL} 
          alt={creator.name} 
          className="w-full h-48 object-cover rounded-lg mb-4 flex-shrink-0" 
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center flex-shrink-0">
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
      )}
      <h2 className="text-xl font-bold mb-2 text-white text-center">{creator.name}</h2>
      <p className="text-gray-300 mb-4 line-clamp-3 flex-grow text-center">{creator.description}</p>
      
      <div className="flex flex-col gap-3 mt-auto">
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-center"
        >
          Visit Creator
        </a>
        
        <div className="flex gap-2">
          <Link 
            to={`/creators/${creator.id}`} 
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition-colors text-center"
          >
            View Details
          </Link>
          <Link 
            to={`/edit/${creator.id}`}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm transition-colors text-center"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}