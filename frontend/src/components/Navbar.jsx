import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart,  Mail, Phone, MapPin } from 'lucide-react';
import { Links, NavLink } from 'react-router';

const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const links = <>
<NavLink to = '/'>
Home
</NavLink>
<NavLink  to = '/products'>
All Products
</NavLink>

  </>
    return (
        <div>
              <nav className="bg-white shadow-md sticky top-0 z-50">

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Prodify
              </h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 pl-10 pr-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button className="relative hover:text-purple-600 transition-colors">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Categories - Desktop */}
          <div className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t">
           {
            links
           }
          
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4">
            <div className="flex flex-col gap-4">
              {/* Search Bar - Mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>

              {/* Mobile Links */}
              {links}
              
              <div className="flex gap-4 pt-4 border-t">
                 <button className="relative hover:text-purple-600 transition-colors">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              </div>
            </div>
          </div>
        )}
      </nav>
        </div>
    );
};

export default Navbar;