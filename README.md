# Cheshire Homes Management System

A comprehensive resident management system for Cheshire Homes Mumbai, built with React and Material-UI.

## Features

- 📋 **Resident Directory**: Complete database of 46 residents with detailed profiles
- 🏠 **About Page**: Comprehensive information about Cheshire Homes history and services
- 📞 **Contact Page**: Contact information with interactive satellite map
- 🎨 **Modern UI**: Beautiful Material-UI design with consistent card layouts
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🗺️ **Interactive Maps**: Leaflet integration for location display

## Resident Information

The system manages detailed information for each resident including:
- Personal details (name, age, gender, blood group)
- Disability information and severity levels
- Guardian and emergency contact details
- Residential addresses in Mumbai
- Unique CHM ID system

## Technology Stack

- **Frontend**: React 18, Material-UI, React Router
- **Maps**: Leaflet, React-Leaflet
- **Icons**: Material Icons
- **Styling**: Emotion CSS-in-JS
- **Data Storage**: LocalStorage (client-side)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Cheshire.git
   cd Cheshire
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository named `Cheshire`
   - Don't initialize it with README, .gitignore, or license (we already have these)

2. **Run the Deployment Script**:
   ```bash
   deploy-to-github-pages.bat
   ```
   - Enter your GitHub username when prompted
   - The script will automatically update the homepage URL and deploy

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source should be set to "Deploy from a branch"
   - Branch should be "gh-pages"

### Manual Deployment

1. **Update package.json**:
   ```json
   "homepage": "https://yourgithubusername.github.io/Cheshire"
   ```

2. **Add GitHub remote**:
   ```bash
   git remote add origin https://github.com/yourgithubusername/Cheshire.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   cd client
   npm run deploy
   ```

## Project Structure

```
Cheshire/
├── client/                 # React frontend application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components (Location map)
│   │   ├── data/          # Mock data and localStorage utilities
│   │   ├── pages/         # Main page components
│   │   │   ├── Dashboard.js    # Landing page
│   │   │   ├── About.js        # About Cheshire Homes
│   │   │   ├── Contact.js      # Contact information & map
│   │   │   ├── PersonList.js   # Resident directory
│   │   │   └── PersonForm.js   # Add/Edit resident form
│   │   ├── services/      # API utilities
│   │   └── App.js         # Main app component
│   └── package.json       # Dependencies and scripts
├── server/                # Node.js backend (optional)
└── README.md             # This file
```

## Key Components

### Dashboard (`Dashboard.js`)
- Hero section with Cheshire Homes branding
- Navigation to all major sections
- Services overview and philosophy section
- Updated with real Mumbai contact information

### Resident Directory (`PersonList.js`)
- Grid layout with consistent 650px card width
- Search functionality across all resident fields
- Real data for 46 residents from Mumbai locations
- Edit/Delete functionality for resident management

### About Page (`About.js`)
- Comprehensive Cheshire Homes history
- Mission, vision, and values
- Detailed services information
- Professional layout with Material-UI components

### Contact Page (`Contact.js`)
- Complete contact information for Mumbai location
- Interactive satellite map with Leaflet
- Visiting hours and emergency contact details
- Address: Bethlehem House, Andheri East, Mumbai-400093

## Contact Information

**Cheshire Homes Mumbai**
- 📍 Bethlehem House, Opposite Canosa High School, Behind Sacred Heart Church, Mahakali Caves Road, Andheri East, Mumbai-400093
- ☎️ Phone: +91 22 47489330 / 8779022386
- 📱 WhatsApp: +91 87 79022386
- ✉️ Email: info.mumbai@cheshireindia.org, cheshirehomemumbai@gmail.com

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is developed for Cheshire Homes Mumbai for managing resident information and services.

## Acknowledgments

- **Leonard Cheshire**: Founder of Cheshire Homes
- **Cheshire Homes Mumbai**: For their dedicated service to residents
- **Material-UI Team**: For the excellent component library
- **React Team**: For the powerful frontend framework