import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-amber-800">Brew Haven</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 px-3 py-2 text-sm font-medium">Contact</a>
            <Button variant="default" className="bg-amber-800 hover:bg-amber-900">Order Now</Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Home</a>
            <a href="#menu" className="block text-gray-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Menu</a>
            <a href="#about" className="block text-gray-700 hover:text-amber-800 px-3 py-2 text-base font-medium">About</a>
            <a href="#gallery" className="block text-gray-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Gallery</a>
            <a href="#contact" className="block text-gray-700 hover:text-amber-800 px-3 py-2 text-base font-medium">Contact</a>
            <Button variant="default" className="w-full bg-amber-800 hover:bg-amber-900 mt-2">Order Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;