import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatorCard({ creator }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      {creator.imageURL && (
        <img 
          src={creator.imageURL} 
          alt={creator.name} 
          className="w-full h-48 object-cover rounded-lg mb-4" 
        />
      )}
      <h2 className="text-xl font-bold mb-2 text-white">{creator.name}</h2>
      <p className="text-gray-300 mb-4 line-clamp-3">{creator.description}</p>
      
      <div className="flex justify-between items-center">
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          Visit
        </a>
        
        <div className="space-x-2">
          <Link 
            to={`/creators/${creator.id}`} 
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            View
          </Link>
          <Link 
            to={`/edit/${creator.id}`}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}