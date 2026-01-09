import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Parcours from './pages/Parcours'
import Skills from './pages/Skills'
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
                    <Route path="/parcours" element={<Parcours />} />
                    <Route path="/competences" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Redirects for old URLs */}
                    <Route path="/experience" element={<Navigate to="/parcours" replace />} />
                    <Route path="/a-propos" element={<Navigate to="/parcours" replace />} />
                    <Route path="/articles" element={<Navigate to="/contact" replace />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App

