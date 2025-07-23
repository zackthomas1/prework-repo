import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

export default function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!name.trim() || !url.trim() || !description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('creators')
        .insert([
          {
            name: name.trim(),
            url: url.trim(),
            description: description.trim(),
            imageURL: imageURL.trim() || null
          }
        ]);

      if (error) {
        console.error('Error adding creator:', error);
        alert('Failed to add creator. Please try again.');
      } else {
        alert('Creator added successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-12">Add New Creator</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300 text-center">
            Creator Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
            placeholder="Enter creator's name"
            required
          />
        </div>

        <div>
          <label htmlFor="imageURL" className="block text-sm font-medium mb-2 text-gray-300 text-center">
            Profile Image
          </label>
          <p className="text-xs text-gray-400 mb-2 text-center">Provide a link to an image of your creator</p>
          <input
            type="url"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-300 text-center">
            Description
          </label>
          <p className="text-xs text-gray-400 mb-2 text-center">Describe the creator and what makes them interesting</p>
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
          <label htmlFor="url" className="block text-sm font-medium mb-2 text-gray-300 text-center">
            Social Media Link
          </label>
          <p className="text-xs text-gray-400 mb-2 text-center">Link to their channel, profile, or website</p>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
            placeholder="https://example.com"
            required
          />
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl"
          >
            {loading ? 'Adding Creator...' : 'Add Creator'}
          </button>
        </div>
      </form>
    </div>
  );
}