import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

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
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to CreatorVerse!</h1>
      <p className="text-gray-300 mb-8">No creators found. Add one to get started!</p>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">CreatorVerse</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map(c => <CreatorCard key={c.id} creator={c} />)}
      </div>
    </div>
  );
}