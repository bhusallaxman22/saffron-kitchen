import React, { useState, useEffect } from 'react';
import { menuItems } from '../data/menuItems';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Appetizer');
  const [highlightStyle, setHighlightStyle] = useState({});

  // Get the first-level categories
  const categories = Object.keys(menuItems);

  // Update highlight position when active category changes
  useEffect(() => {
    const activeButton = document.querySelector('.button--is-active');
    if (activeButton) {
      const { width, height, left, top } = activeButton.getBoundingClientRect();
      setHighlightStyle({
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${left + window.scrollX}px, ${top + window.scrollY}px)`
      });
    }
  }, [activeCategory]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const activeButton = document.querySelector('.button--is-active');
      if (activeButton) {
        const { width, height, left, top } = activeButton.getBoundingClientRect();
        setHighlightStyle({
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate(${left + window.scrollX}px, ${top + window.scrollY}px)`
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to render menu items
  const renderMenuItems = (items) => {
    if (Array.isArray(items)) {
      return items.map((item, index) => (
        <div key={index} className="item mb-8">
          <div className="item__header flex items-baseline">
            <h3 className="item__title text-3xl font-cookie text-saffron mr-2">
              {item.name}
            </h3>
            <span className="item__dots flex-1 border-b border-dashed border-gray-500 mx-2" />
            <span className="item__price text-2xl font-cookie text-saffron">
              {item.price}
            </span>
          </div>
          {item.description && (
            <p className="item__description text-gray-300 mt-2">
              {item.description}
            </p>
          )}
        </div>
      ));
    } else if (typeof items === 'object') {
      return Object.entries(items).map(([subcategory, subItems]) => (
        <div key={subcategory}>
          <h3 className="text-2xl font-cookie text-saffron mb-4">{subcategory}</h3>
          {renderMenuItems(subItems)}
        </div>
      ));
    }
    return null;
  };

  return (
    <section className="min-h-screen flex items-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://i.imgur.com/er8DtBW.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="wrapper max-w-4xl mx-auto px-4 py-20">
        <h2 className="inline-block border-b-4 border-saffron text-5xl font-cookie mb-12">
          Our Menu
        </h2>

        <div className="buttons-container mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`button ${activeCategory === category ? 'button--is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
          <span className="highlight absolute bg-saffron rounded transition-all" style={highlightStyle} />
        </div>

        {categories.map(category => (
          <div
            key={category}
            className={`menu ${activeCategory === category ? 'menu--is-visible' : ''}`}
            id={`${category}Menu`}
          >
            {renderMenuItems(menuItems[category])}
          </div>
        ))}
      </div>
    </section>
  );
}