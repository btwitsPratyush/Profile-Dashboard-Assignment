# Profile Dashboard

A modern, responsive web application featuring a sleek profile dashboard with interactive widgets built using React, TypeScript, and Tailwind CSS.

## Features

- **Dark Mode Design**: Elegant dark theme with glassmorphism effects and smooth transitions
- **Profile Widget**: Interactive tabs displaying "About Me", "Experiences", and "Recommended" content
- **Gallery Widget**: Dynamic image gallery with horizontal scrolling and the ability to add new images
- **Responsive Layout**: Optimized for laptop/desktop screens (768px and above)
- **Modern UI**: Smooth animations, hover effects, and professional styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```sh
npm run build
```

## Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first styling
- **shadcn-ui** - Beautiful component library
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── ProfileWidget.tsx # Profile information widget
│   └── GalleryWidget.tsx # Image gallery widget
├── pages/
│   └── Index.tsx        # Main page layout
├── assets/              # Images and static assets
└── index.css           # Global styles and design tokens
```

## Design Details

- **Layout**: Split-screen design with empty left half and widgets on the right
- **Widgets**: Two vertically aligned cards with consistent spacing
- **Styling**: Rounded corners, backdrop blur, subtle borders, and shadow effects
- **Interactions**: Tab switching, image carousel navigation, and hover animations



