# 🌟 CreatorVerse

A modern web application for discovering, managing, and showcasing your favorite content creators. Built with React, Vite, and Supabase.

![CreatorVerse](https://img.shields.io/badge/React-18.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.0+-green.svg)
![Supabase](https://img.shields.io/badge/Supabase-Database-orange.svg)

## ✨ Features

- **📱 Responsive Design**: Beautiful dark theme interface that works on all devices
- **➕ Add Creators**: Easy-to-use form for adding new content creators
- **👀 View Creators**: Detailed creator profiles with images and descriptions
- **✏️ Edit Creators**: Update creator information with a user-friendly interface
- **🗑️ Delete Creators**: Remove creators with confirmation prompts
- **🔗 External Links**: Direct links to creators' social media profiles
- **🖼️ Image Support**: Display creator profile images
- **⚡ Real-time Updates**: Powered by Supabase for instant data synchronization

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.7.0
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/creatorverse.git
   cd creatorverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project on [Supabase](https://supabase.com)
   - Create a table named `creators` with the following schema:
     ```sql
     CREATE TABLE creators (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       description TEXT NOT NULL,
       url VARCHAR(500) NOT NULL,
       imageURL VARCHAR(500),
       created_at TIMESTAMP DEFAULT NOW()
     );
     ```

4. **Configure environment variables**
   - Create a `.env.local` file in the project root:
     ```env
     VITE_SUPABASE_URL=your-supabase-project-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```
   - Update `src/client.js` to use environment variables:
     ```javascript
     import { createClient } from '@supabase/supabase-js';
     
     const URL = import.meta.env.VITE_SUPABASE_URL;
     const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
     export const supabase = createClient(URL, API_KEY);
     ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
creatorverse/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── CreatorCard.jsx      # Individual creator card component
│   ├── pages/
│   │   ├── AddCreator.jsx       # Form to add new creators
│   │   ├── EditCreator.jsx      # Form to edit existing creators
│   │   ├── ShowCreatorCards.jsx # Home page displaying all creators
│   │   └── ViewCreator.jsx      # Detailed view of a single creator
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App-specific styles
│   ├── client.js                # Supabase client configuration
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Pages & Components

### Home Page (`ShowCreatorCards.jsx`)
- Displays all creators in a responsive grid layout
- Shows creator cards with images, names, and descriptions
- Quick access to view, edit, and visit creator profiles

### Add Creator (`AddCreator.jsx`)
- Form interface for adding new creators
- Fields: Name, Image URL, Description, Social Media Link
- Form validation and error handling
- Success/error feedback

### View Creator (`ViewCreator.jsx`)
- Detailed view of individual creators
- Large image display and full description
- Edit and delete actions
- Direct link to creator's social media

### Edit Creator (`EditCreator.jsx`)
- Pre-populated form for editing existing creators
- Same fields as Add Creator form
- Update functionality with confirmation

### Creator Card (`CreatorCard.jsx`)
- Reusable component for displaying creator information
- Thumbnail image, name, description preview
- Action buttons for View, Edit, and Visit

## 🎯 Usage

1. **Adding a Creator**: Click "Add Creator" in the navigation, fill out the form with creator details
2. **Viewing Creators**: Click "View" on any creator card to see full details
3. **Editing Creators**: Click "Edit" on creator cards or from the detailed view
4. **Deleting Creators**: Use the delete button in the detailed view (includes confirmation)
5. **Visiting Creator Pages**: Click "Visit" to open their social media profile

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔒 Environment Variables

For security, this project uses environment variables to store sensitive information like API keys. Create a `.env.local` file in your project root with:

```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Important**: Never commit your `.env.local` file to version control. The `.gitignore` file is already configured to exclude environment files.

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Supabase](https://supabase.com/) - Backend as a service
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Client-side routing

---

**Built with ❤️ by [Your Name]**
