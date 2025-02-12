import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import praadnya from '../assets/Praadnya.jpg'
import Jagadeesh from '../assets/Jagadeesh.jpg'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const interns = [
    { 
      id: 1, 
      name: "Praadnya", 
      path: "/praadnya-h", 
      image: praadnya
    },
    { 
      id: 2, 
      name: "Jagadeesh", 
      path: "/Jagadeesh", 
      image: Jagadeesh
    },
    // Add other interns similarly
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navbar - added w-full */}
      <nav className="bg-white shadow-lg w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">Cars24 CFSPL Interns</h1>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>

            <div className="hidden md:flex space-x-4">
              <Button>Home</Button>
              <Button>About</Button>
              <Button>Contact</Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Button variant="ghost" className="w-full justify-start">Home</Button>
              <Button variant="ghost" className="w-full justify-start">About</Button>
              <Button variant="ghost" className="w-full justify-start">Contact</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - updated container width and padding */}
      <main className="flex-grow w-full">
        <div className="max-w-[2000px] mx-auto px-4 py-8 w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Our Interns</h2>
          
          {/* Updated grid to ensure full width coverage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full place-items-center">
            {interns.map((intern) => (
              <Link
                key={intern.id}
                to={intern.path}
                className="flex flex-col items-center group w-full max-w-xs"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={intern.image}
                    alt={intern.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-500">
                  {intern.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer - added w-full */}
      <footer className="bg-gray-800 text-white w-full">
        <div className="max-w-[2000px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cars24 CFSPL</h3>
              <p className="text-gray-300">Empowering the future of automotive technology through our internship program.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300">Email: contact@cars24cfspl.com</p>
              <p className="text-gray-300">Phone: +1 234 567 890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Cars24 CFSPL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;