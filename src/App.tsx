import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogPost from './components/Blog/BlogPost';
import Contact from './components/Contact';
import NewsletterSubscribe from './components/Newsletter/NewsletterSubscribe';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <NewsletterSubscribe />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Timeline />
              <Services />
              <Contact />
            </main>
          } />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Lucas Comte. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;