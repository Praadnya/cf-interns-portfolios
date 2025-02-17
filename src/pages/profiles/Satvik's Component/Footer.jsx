import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Satvik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
