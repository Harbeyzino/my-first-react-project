import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Import the external CSS file

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show button if scroll position is more than 300px
      } else {
        setShowButton(false); // Hide button if less than 300px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="scrollButton">
          <img className='Scroll' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAhElEQVRIS+2TSwrAMAhE9cbtSdobNwYilBJ1XAj9uZZ5OqNMxcXF+vRiwCGVsY+lZv2mReWAzPRe771CFtuWPq3YvaMbwhsM8W0IrygEAlzEdXgIEgIMcRjiAgJxCOL9QQ9UPY8yNe0KLTor6/NZX5v65FnzD4iCpOdbFK44aUid6TcBDUObPRkQXGu9AAAAAElFTkSuQmCC"/>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
