import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

export default function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOne() {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) console.error(error);
      else setCreator(data);
    }
    fetchOne();
  }, [id]);

  if (!creator) return <div className="text-center text-gray-300"><p>Loading...</p></div>;

  async function handleDelete() {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      await supabase.from('creators').delete().eq('id', id);
      navigate('/');
    }
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        {creator.imageURL ? (
          <img 
            src={creator.imageURL} 
            alt={creator.name} 
            className="w-80 h-64 object-cover rounded-lg mb-6 mx-auto" 
          />
        ) : (
          <div className="w-80 h-64 bg-gray-700 rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-gray-400">No Image Available</span>
          </div>
        )}
        
        <h1 className="text-4xl font-bold mb-6 text-white">{creator.name}</h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">{creator.description}</p>
        
        <div className="flex justify-center mb-8">
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
          >
            Visit Creator's Page
          </a>
        </div>
        
        <div className="flex justify-center gap-4">
          <Link 
            to={`/edit/${id}`} 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Edit Creator
          </Link>
          <button 
            onClick={handleDelete} 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Delete Creator
          </button>
        </div>
      </div>
    </div>
  );
}