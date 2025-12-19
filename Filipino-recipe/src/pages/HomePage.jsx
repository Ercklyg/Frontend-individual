import { useState } from 'react';
import DishCard from '../components/DishCard';
import { recipes } from '../data/recipes';

function HomePage({ searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(recipes.map(recipe => recipe.category))];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === 'All' || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-filipino-cream to-white">

      {/* ================= HERO SECTION (REDUCED HEIGHT) ================= */}
      <section className="h-[25vh] bg-filipino-red text-white flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Authentic Filipino Cuisine
          </h1>
          <p className="text-lg md:text-xl text-filipino-light-gold max-w-2xl mx-auto">
            Explore traditional recipes passed down through generations.
            From savory adobo to sweet halo-halo, experience the rich flavors
            of the Philippines.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 text-center">

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-filipino-red text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-filipino-gold hover:text-white shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULTS */}
        {filteredRecipes.length === 0 ? (
          <div className="py-20">
            <p className="text-2xl text-gray-500">
              No recipes found matching your search.
            </p>
            <p className="text-gray-400 mt-2">
              Try different keywords or browse all recipes.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                Showing{' '}
                <span className="font-bold text-filipino-red">
                  {filteredRecipes.length}
                </span>{' '}
                recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(recipe => (
                <DishCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default HomePage;
