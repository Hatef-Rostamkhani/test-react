import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from API on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Filter categories based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(category =>
        category.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm, categories]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://sbfp66lohj.execute-api.us-east-1.amazonaws.com/Prod/categories');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCategories(data);
      setFilteredCategories(data);
      setError(null);
    } catch (err) {
      setError('Failed to load categories: ' + err.message);
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm(category.text);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputBlur = () => {
    // Delay closing to allow clicking on dropdown items
    setTimeout(() => setIsOpen(false), 200);
  };

  const clearSelection = () => {
    setSelectedCategory(null);
    setSearchTerm('');
    setIsOpen(false);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="container">
          <h1>Service Categories</h1>
          <div className="loading">Loading categories...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="container">
          <h1>Service Categories</h1>
          <div className="error">
            {error}
            <button onClick={fetchCategories} className="retry-btn">
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Service Categories</h1>
        <p className="subtitle">Search and select from {categories.length} available service categories</p>
        
        <div className="dropdown-container">
          <div className="search-input-container">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              placeholder="Search for a service category..."
              className="search-input"
            />
            {selectedCategory && (
              <button onClick={clearSelection} className="clear-btn">
                ×
              </button>
            )}
            <button onClick={handleInputClick} className="dropdown-arrow">
              {isOpen ? '▲' : '▼'}
            </button>
          </div>

          {isOpen && (
            <div className="dropdown-menu">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className={`dropdown-item ${
                      selectedCategory?.id === category.id ? 'selected' : ''
                    }`}
                  >
                    {category.text}
                  </div>
                ))
              ) : (
                <div className="dropdown-item no-results">
                  No categories found for "{searchTerm}"
                </div>
              )}
            </div>
          )}
        </div>

        {selectedCategory && (
          <div className="selected-info">
            <h3>Selected Category:</h3>
            <div className="selected-category">
              <strong>ID:</strong> {selectedCategory.id}<br />
              <strong>Name:</strong> {selectedCategory.text}
            </div>
          </div>
        )}

        <div className="stats">
          <p>Total categories: {categories.length}</p>
          {searchTerm && (
            <p>Filtered results: {filteredCategories.length}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 