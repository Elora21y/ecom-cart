import React from 'react';
import {  Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Prodify
              </h3>
              <p className="text-sm mb-4">
                Prodify is a trusted online shopping destination. Quality products at the best prices.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Returns</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-white font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+880 1234-567890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>support@shop.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Prodify. All rights reserved . </p>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;