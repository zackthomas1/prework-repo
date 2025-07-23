import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import { Link } from 'react-router-dom';

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select('*').order('id');
      if (error) console.error(error);
      else setCreators(data);
      setLoading(false);
    }
    fetchCreators();
  }, []);

  if (loading) return <div className="text-center text-gray-300"><p>Loading...</p></div>;
  if (creators.length === 0) return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to CreatorVerse!</h1>
      <p className="text-gray-300 mb-8 text-lg">No creators found. Add one to get started!</p>
      <Link 
        to="/new" 
        className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg transition-colors font-medium"
      >
        Add Your First Creator
      </Link>
    </div>
  );

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-12 text-center">CreatorVerse</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {creators.map(c => <CreatorCard key={c.id} creator={c} />)}
      </div>
    </div>
  );
}