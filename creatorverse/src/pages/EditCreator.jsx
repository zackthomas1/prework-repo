import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching creator:', error);
        alert('Failed to load creator data');
        navigate('/');
      } else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL || '');
      }
      setFetchLoading(false);
    }
    
    fetchCreator();
  }, [id, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!name.trim() || !url.trim() || !description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('creators')
        .update({
          name: name.trim(),
          url: url.trim(),
          description: description.trim(),
          imageURL: imageURL.trim() || null
        })
        .eq('id', id);

      if (error) {
        console.error('Error updating creator:', error);
        alert('Failed to update creator. Please try again.');
      } else {
        alert('Creator updated successfully!');
        navigate(`/creators/${id}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  if (fetchLoading) return <div className="text-center text-gray-300"><p>Loading...</p></div>;

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Edit Creator</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter creator's name"
            required
          />
        </div>

        <div>
          <label htmlFor="imageURL" className="block text-sm font-medium mb-2 text-gray-300">
            Image
          </label>
          <p className="text-xs text-gray-400 mb-2">Provide a link to an image of your creator. Be sure to include the http://</p>
          <input
            type="url"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-300">
            Description
          </label>
          <p className="text-xs text-gray-400 mb-2">Provide a description of the creator. Who are they? What makes them interesting?</p>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe this creator..."
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium mb-2 text-gray-300">
            Social Media Link
          </label>
          <p className="text-xs text-gray-400 mb-2">Provide a link to the creator's social media profile. Be sure to include the http://</p>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com"
            required
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Updating...' : 'UPDATE'}
          </button>
          
          <button
            type="button"
            onClick={() => navigate(`/creators/${id}`)}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
