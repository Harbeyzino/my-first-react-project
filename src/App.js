import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import TeamDapixel from "./pages/TeamDaPixel";
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollButton/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/TeamDapixel" element={<TeamDapixel />} />
      </Routes>
    </div>
  );
}

export default App;
