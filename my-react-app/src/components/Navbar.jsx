import { Link } from 'react-router-dom';
import { Search, ChefHat } from 'lucide-react';

function Navbar({ searchQuery, onSearchChange }) {
  return (
    <nav className="bg-filipino-red shadow-lg sticky top-0 z-50">
      {/* NAV CONTAINER — SIZE FIX */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 md:py-0 md:h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <ChefHat className="w-10 h-10 text-filipino-gold group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold text-white">Lutong Mother</h1>
              <p className="text-filipino-light-gold text-sm">Filipino Kitchen</p>
            </div>
          </Link>

          {/* SEARCH */}
          <div className="w-full md:flex-1 md:max-w-md md:ml-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-filipino-gold focus:outline-none focus:border-filipino-light-gold transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
