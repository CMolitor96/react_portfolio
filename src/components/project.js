import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function Project() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };

    return (
        <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        {renderPage()}
        <Footer />
      </div>
    );
}

export default Project;