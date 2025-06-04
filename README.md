# Categories Dropdown App

A React application that fetches service categories from an API and displays them in a searchable dropdown component.

## Features

- 🔍 **Searchable Dropdown**: Real-time search functionality to filter categories
- 🎨 **Modern UI**: Beautiful, responsive design with gradient backgrounds
- 📱 **Mobile Friendly**: Fully responsive across all device sizes
- ⚡ **Fast Performance**: Efficient filtering and rendering
- 🔄 **Error Handling**: Graceful error handling with retry functionality
- 📊 **Statistics**: Shows total categories and filtered results
- ✨ **Smooth Animations**: Polished user experience with transitions

## API Endpoint

The app fetches data from: `https://sbfp66lohj.execute-api.us-east-1.amazonaws.com/Prod/categories`

This endpoint returns an array of category objects with the following structure:
```json
[
  {
    "id": 1,
    "text": "Plumbing"
  },
  {
    "id": 2,
    "text": "Electrical"
  }
  // ... more categories
]
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Usage

1. **Loading**: The app automatically fetches categories when it loads
2. **Searching**: Type in the search box to filter categories in real-time
3. **Selection**: Click on any category to select it
4. **Clearing**: Use the × button to clear your selection
5. **Dropdown**: Click the arrow button to open/close the dropdown

## Project Structure

```
src/
├── App.js          # Main React component
├── App.css         # Styling for the app
├── index.js        # React app entry point
└── index.css       # Global styles

public/
├── index.html      # HTML template
└── favicon.ico     # App icon

package.json        # Dependencies and scripts
README.md          # Project documentation
```

## Technologies Used

- **React 18** - Frontend framework
- **CSS3** - Styling with modern features
- **Fetch API** - HTTP requests
- **React Hooks** - State management (useState, useEffect)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License. 