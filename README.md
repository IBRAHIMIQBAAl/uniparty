# University Party Website

A React-based website built with Vite, Tailwind CSS, Animate.css, and Framer Motion to manage and showcase university graduation party information.

## Features

- **Home Page**: 
  - Animated hero section with Framer Motion and Animate.css
  - Payment verification system for the bachelor's party with autocomplete
  - Interactive ticket generation for verified students
  - Party details and information section
  
- **Memories Page**:
  - Photo and video gallery showcasing university memories
  - Interactive grid with image/video modal viewer
  - Personalized memories featuring actual students and events
  
- **History Page**:
  - Student character/personality finder with real student profiles
  - Humorous personality descriptions for each student
  - University timeline and character archetypes
  
- **About Page**:
  - Information about the website and team
  - FAQ section and contact details

## New Features

- **Student Name Autocomplete**: Type a few letters to see matching student names from the database
- **Interactive Ticket Generation**: Upon verification, a personalized ticket is generated with:
  - Unique ticket number
  - Student name
  - Event details
  - QR code placeholder for entry scanning
  - Print functionality
- **Real Student Data**: The website now uses actual student data including:
  - Complete list of students who paid for the bachelor's party
  - Personalized student profiles with unique character types
  - Real memories and events from the university experience

## Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Fast development environment and building tool
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **Animate.css**: Ready-to-use CSS animations
- **React Router**: For navigation between pages

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/university-website.git
   cd university-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
/src
  /components     # Reusable UI components
    Navbar.jsx
    Footer.jsx
    HeroSection.jsx
    StudentCheck.jsx    # Includes autocomplete and ticket generation
    MemoriesGrid.jsx
    StudentHistory.jsx
  /pages          # Page components
    Home.jsx
    Memories.jsx
    History.jsx
    About.jsx
  /data           # Data files (JSON)
    paidStudents.json   # List of verified students
    studentHistory.json # Student profiles and personalities
    memories.json       # University memories and events
  App.jsx         # Main application component
  main.jsx        # Entry point
```

## License

MIT

## Credits

- Images from [Unsplash](https://unsplash.com/)
- Avatar images from [Random User Generator](https://randomuser.me/)
- Icons from [Heroicons](https://heroicons.com/) 