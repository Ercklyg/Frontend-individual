import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, Users, ChefHat, Lightbulb, ArrowLeft } from 'lucide-react';
import { recipes } from '../data/recipes';

function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="w-screen min-h-screen bg-filipino-cream flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Recipe Not Found
          </h2>
          <Link
            to="/"
            className="text-filipino-red hover:text-filipino-orange font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-filipino-cream to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-8">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-filipino-red hover:text-filipino-orange font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-8">
              <span className="bg-filipino-red text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold mb-2 inline-block">
                {recipe.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">
                {recipe.name}
              </h1>
              <p className="text-md sm:text-xl text-filipino-light-gold">
                {recipe.description}
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-8">
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-filipino-cream p-2 sm:p-3 rounded-lg">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-filipino-red" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Prep Time</p>
                  <p className="font-semibold text-gray-800">{recipe.prepTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-filipino-cream p-2 sm:p-3 rounded-lg">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-filipino-red" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Cook Time</p>
                  <p className="font-semibold text-gray-800">{recipe.cookTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-filipino-cream p-2 sm:p-3 rounded-lg">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-filipino-red" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Servings</p>
                  <p className="font-semibold text-gray-800">
                    {recipe.servings} people
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              <div className="md:col-span-1">
                <div className="bg-filipino-cream rounded-xl p-4 sm:p-6 sticky top-20 sm:top-24">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-filipino-red" />
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                      Ingredients
                    </h2>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-filipino-red rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">
                          {ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Instructions
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index} className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-filipino-red text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                          {index + 1}
                        </div>
                        <p className="text-sm text-gray-700 pt-1 sm:pt-2 leading-relaxed">
                          {instruction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {recipe.tips && (
                  <div className="bg-gradient-to-r from-filipino-light-gold to-filipino-cream rounded-xl p-4 sm:p-6 border-l-4 border-filipino-gold">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-filipino-orange flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                          Cooking Tips
                        </h3>
                        <p className="text-sm text-gray-700">
                          {recipe.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RecipePage;
