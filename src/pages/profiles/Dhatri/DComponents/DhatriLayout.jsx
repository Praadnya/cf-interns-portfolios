import { useState } from 'react';
import Navbar from './DhatriNavbar';
import DhatriHome from '../dpages/DhatriHome';
import DhatriEducation from '../dpages/DhatriEducation';
import DhatriExperience from '../dpages/DhatriExperience';
import DhatriProjects from '../dpages/DhatriProjects';

function Layout() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <DhatriHome />;
      case 'education':
        return <DhatriEducation />;
      case 'experience':
        return <DhatriExperience />;
      case 'projects':
        return <DhatriProjects />;
      default:
        return <DhatriHome />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="container">
        {renderPage()}
      </main>
    </div>
  );
}

export default Layout;