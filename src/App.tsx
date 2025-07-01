import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
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
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
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
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;