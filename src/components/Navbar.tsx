import React from "react";

const Navbar: React.FC<{}> = () => {
  const scrollToTop = () => {
    const scroller = document.getElementById('scroller');
    if (scroller) {
      scroller.scroll(0,0);
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAchievements = () => {
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className="text-white py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Bagaz!</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-200" onClick={scrollToTop}>Home</a></li>
            <li><a href="#about" className="hover:text-gray-200" onClick={scrollToAbout}>About</a></li>
            <li><a href="#blog" className="hover:text-gray-200" onClick={scrollToBlog}>Blog</a></li>
            <li><a href="#achievements" className="hover:text-gray-200" onClick={scrollToAchievements}>Achievements</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;