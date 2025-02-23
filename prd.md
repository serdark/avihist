# Turkish Aviation Industry History Matrix - Product Requirements Document

## Project Overview
The Turkish Aviation Industry History Matrix is an interactive archive platform that visualizes and documents the interconnected history of Turkish aviation through an experimental and visually engaging interface. The platform maps relationships between people, institutions, and projects that shaped Turkey's aviation industry.

## Core Features

### 1. Visual Interface
- Dark theme with minimalist design
- Curved line background animation
- Custom cursor system with interactive states
- Responsive layout optimized for various screen sizes
- High-contrast color scheme for better readability
- Bottom-aligned arc visualization

### 2. Navigation & Search
- Dynamic search functionality with real-time filtering
- Dropdown results with smooth transitions
- Chevron toggle for expanded search view
- Category-based filtering system
- Interactive scrollbars with custom styling

### 3. Content Display
- Information popups with consistent styling
- Categorized content system (People, Institutions, Projects)
- Year-based chronological organization
- Bilingual support with Turkish character optimization
- Source attribution and references

### 4. Interactive Elements
- Custom cursor states for different interactions
- Hover effects for clickable elements
- Transition animations for state changes
- Connection visualization between related items
- Color-coded categorization system

## Technical Implementation

### 1. Frontend Architecture
- Modular file structure for better organization
- Semantic HTML5 markup
- CSS3 with modern features
- Vanilla JavaScript for core functionality
- Canvas-based background animations

### 2. Typography & Assets
- B612 font family implementation
- Extended Unicode range for Turkish characters
- SVG-based custom cursors
- Vector icons for different categories
- Optimized asset loading

### 3. Data Management
- Structured JSON data organization
- Separate data and connection management
- Dynamic content loading
- Efficient state management
- Modular content updates

## File Structure
```
project/
├── index.html          # Main application
├── style.css          # Core styles
├── script.js          # Main functionality
├── data/
│   ├── data.js        # Content data
│   └── connections.js # Relationship data
├── assets/
│   ├── cursor.svg     # Default cursor
│   ├── cursorv2.svg   # Interactive cursor
│   ├── inst.svg       # Institution icon
│   ├── ppl.svg        # People icon
│   └── prjct.svg      # Project icon
└── fonts/
    ├── B612-Regular.ttf
    └── B612Mono-Regular.ttf
```

## Content Sources

### Books
- Bir Tayyarecinin Anıları - Vecihi Hürkuş
- Doğuşu ve Gelişimi: Türk Havacılık Tarihi - Deniz Dalkılınç
- Gökteki Venüs - M. Bahattin Adıgüzel
- Hayalden Gerçeğe - TUSAŞ
- Mustafa Kemal'in Uçakları - İsmail Yavuz
- Nuri Demirağ - Fatih M. Dervişoğlu
- Teşebbüs Hürriyeti - Şükrü Er
- Türk Hava Harp Sanayii Tarihi - Osman Yalçın
- Türk Havacılığında İlkler - Sinemis Oğuz
- Türk Havacılığına İz Bırakanlar - M. Bahattin Adıgüzel

### Online Resources
- Industry websites (airbus.com, tusas.com)
- Aviation news portals (airnewstimes.com, aviationturkey.com)
- Defense industry resources (defenceturkey.com, aselsan.com)
- Historical archives (nuridemirag.com)
- Technology platforms (baykartech.com)

## Technical Specifications

### 1. Visual Elements
- Background: #000000
- Accent colors:
  - People: #FF2800
  - Institutions: #CB24B8
  - Projects: #1fc2c2
  - Connections: #3CDE00
- Font: B612 family
- Custom cursors for different states
- Z-index hierarchy for proper layering

### 2. Interactive Features
- Popup system with high z-index (99999)
- Smooth transitions (0.3s ease)
- Hover states with color changes
- Custom scrollbar styling
- Dynamic content loading

### 3. Performance Optimization
- Efficient DOM updates
- Asset preloading
- Connection line caching
- Event delegation
- Memory management

## Development Guidelines

### 1. Code Organization
- Modular file structure
- Clear component separation
- Consistent naming conventions
- Documentation standards
- Version control practices

### 2. Styling Principles
- Mobile-first approach
- Consistent spacing system
- Responsive breakpoints
- CSS custom properties
- Performance optimization

### 3. Content Management
- Structured data format
- Regular content updates
- Source verification
- Bilingual support
- Historical accuracy

## Maintenance & Updates
- Regular content reviews
- Performance monitoring
- Bug fixing procedures
- Feature enhancements
- User feedback integration 