import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import About from './pages/About'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import './App.css'

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projets" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/competences" element={<Skills />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
