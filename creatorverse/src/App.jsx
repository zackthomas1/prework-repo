import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreatorCards';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <nav className="mb-8 text-center">
          <div className="space-x-4">
            <Link 
              to="/" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Home
            </Link>
            <Link 
              to="/new" 
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Add Creator
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/new" element={<AddCreator />} />
          <Route path="/creators/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
        </Routes>
      </div>
    </div>
  );
}