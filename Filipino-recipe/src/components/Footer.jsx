import { Heart, ChefHat } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-filipino-dark-red text-white mt-16">
      {/* FOOTER CONTAINER — SIZE FIX */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-8 h-8 text-filipino-gold" />
              <h3 className="text-2xl font-bold">Luto Pinoy</h3>
            </div>
            <p className="text-filipino-light-gold">
              Preserving and sharing authentic Filipino recipes for generations to come.
              Experience the warmth and flavor of the Philippines.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-filipino-gold">Popular Recipes</h4>
            <ul className="space-y-2 text-filipino-light-gold">
              <li className="hover:text-white transition-colors cursor-pointer">Chicken Adobo</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sinigang na Baboy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kare-Kare</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lechon Kawali</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-filipino-gold">About</h4>
            <p className="text-filipino-light-gold">
              Our mission is to make Filipino cuisine accessible to everyone. Each recipe has been
              carefully curated to maintain authenticity while being easy to follow.
            </p>
          </div>
        </div>

        <div className="border-t border-filipino-red pt-8 text-center">
          <p className="text-filipino-light-gold flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-filipino-gold fill-filipino-gold" /> for Filipino Food Lovers
          </p>
          <p className="text-filipino-light-gold mt-2">
            {currentYear} Luto Pinoy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
