import { Clock, MapPin, Phone, Smile } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Smile className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Prime Systems Dental</span>
            </div>
            <p className="text-gray-400">
              Providing exceptional dental care with a personal touch since
              2008.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div>General Dentistry</div>
              <div>Cosmetic Dentistry</div>
              <div>Restorative Care</div>
              <div>Pediatric Dentistry</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Prime Systems Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
