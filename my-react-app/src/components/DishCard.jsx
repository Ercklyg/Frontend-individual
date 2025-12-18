import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';

function DishCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group w-full h-full flex flex-col">
      {/* IMAGE */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-filipino-red text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {recipe.category}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-filipino-red transition-colors">
          {recipe.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        {/* PUSH BUTTON TO BOTTOM */}
        <div className="mt-auto">
          <Link
            to={`/recipe/${recipe.id}`}
            className="inline-flex items-center gap-2 bg-filipino-gold hover:bg-filipino-orange text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 group-hover:gap-3 w-full justify-center"
          >
            View Recipe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
