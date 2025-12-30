import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-image-wrapper">
                        <div className="hero-image-glow"></div>
                        <img
                            src="/headshot.jpg"
                            alt="Souleymane Sall"
                            className="hero-image"
                        />
                    </div>

                    <div className="hero-text">
                        <div className="hero-badge animate-fade-in-up">
                            <span className="badge-dot"></span>
                            Disponible pour opportunités
                        </div>

                        <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Souleymane Sall
                        </h1>

                        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Data Scientist – <span className="text-gradient">Scoring, Machine Learning & NLP</span>
                        </p>

                        <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Data Scientist issu d'un Master en Statistique Appliquée, avec une expérience professionnelle en ESN.
                            Spécialisé dans les projets de <strong>scoring</strong>, <strong>segmentation client</strong> et <strong>recommandation de produits</strong>,
                            avec une approche orientée pipeline complet, cloud et bonnes pratiques MLOps.
                        </p>

                        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Link to="/projets" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                Voir les projets
                            </Link>
                            <a href="/CV_Souleymane_SALL_.pdf" download className="btn btn-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Télécharger CV
                            </a>
                        </div>

                        <div className="hero-social animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <a href="https://github.com/Souley225" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/souleymanes-sall/" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://medium.com/@sallsouleymane66" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="Medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll">
                    <span>Scroll</span>
                    <div className="scroll-line"></div>
                </div>
            </div>
        </section>
    )
}

export default Home
