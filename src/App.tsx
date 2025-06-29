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
              <Projects />
              <Services />
              <Contact />
            </main>
          } />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Lucas Comte</h3>
                <p className="text-gray-300">
                  Full Stack Developer passionate about creating innovative solutions.
                </p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Featured Projects</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://callavox.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Callavox - AI for Hospitality
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                      View All Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:lucas.comte63700@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/lucas-comte-2011a1161/" className="text-gray-300 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/lcomte" className="text-gray-300 hover:text-white transition-colors">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} Lucas Comte. All rights reserved.</p>
              <p className="mt-2 text-sm text-gray-400">
                Powered by innovative AI solutions like{' '}
                <a 
                  href="https://callavox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Callavox
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;