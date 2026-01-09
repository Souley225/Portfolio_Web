import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-image-wrapper">
                        <img
                            src="/headshot.jpg"
                            alt="Souleymane Sall"
                            className="hero-image"
                        />
                    </div>

                    <div className="hero-text">
                        <div className="hero-header animate-fade-in-up">
                            <h1 className="hero-name">Souleymane Sall</h1>
                            <div className="hero-badge">
                                <span className="badge-dot"></span>
                                Disponible immédiatement
                            </div>
                        </div>

                        <h2 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Data Scientist – <span className="text-gradient">Scoring, ML & NLP</span>
                        </h2>

                        {/* Proof Points Grid - Critical for Recruiter Scanning */}
                        <div className="proof-points animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <div className="proof-item">
                                <span className="proof-number">6+</span>
                                <span className="proof-label">Projets ML</span>
                            </div>
                            <div className="proof-item proof-highlight">
                                <span className="proof-number">4+</span>
                                <span className="proof-label">Déployés</span>
                            </div>
                            <div className="proof-item">
                                <span className="proof-number">5</span>
                                <span className="proof-label">Certifications</span>
                            </div>
                            <div className="proof-item">
                                <span className="proof-number">Master</span>
                                <span className="proof-label">Statistique Appliquée</span>
                            </div>
                        </div>

                        <div className="hero-profile animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <ul className="profile-list">
                                <li className="profile-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                    </svg>
                                    <span>Scoring prédictif, segmentation client, systèmes de recommandation</span>
                                </li>
                                <li className="profile-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                    </svg>
                                    <span>Python, SQL, GCP, MLflow, Docker, FastAPI</span>
                                </li>
                            </ul>
                        </div>

                        <p className="hero-approach animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                            Mon approche : comprendre le besoin métier, développer des solutions robustes et maintenables, documenter pour faciliter la transmission.
                        </p>

                        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <Link to="/projets" className="btn btn-primary btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                Voir mes projets
                            </Link>
                            <a href="/CV_Souleymane_SALL_.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Télécharger CV
                            </a>
                        </div>

                        <div className="hero-social animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                            <a href="https://github.com/Souley225" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-github" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/souleymanes-sall/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-linkedin" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://medium.com/@sallsouleymane66" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-medium" aria-label="Medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

