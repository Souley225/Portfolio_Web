import { Link } from 'react-router-dom'
import './Parcours.css'

function Parcours() {
    return (
        <section className="parcours section">
            <div className="container">
                <h1 className="section-title">Mon Parcours</h1>
                <p className="section-subtitle">
                    Expérience professionnelle et vision de la Data Science
                </p>

                {/* Profile Overview */}
                <div className="parcours-intro animate-fade-in-up">
                    <div className="intro-content">
                        <div className="intro-image">
                            <img src="/headshot.jpg" alt="Souleymane Sall" />
                        </div>
                        <div className="intro-text">
                            <h2>Souleymane Sall</h2>
                            <p className="intro-tagline">Data Scientist orienté impact business</p>
                            <p className="intro-philosophy">
                                Je conçois la data science comme un outil d'aide à la décision, et non comme une fin en soi.
                                Mon approche repose sur la rigueur méthodologique, la compréhension des enjeux métier
                                et la responsabilité liée à l'utilisation de modèles en production.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="parcours-experience animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="subsection-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        Expérience Professionnelle
                    </h2>

                    <article className="experience-card">
                        <div className="experience-header">
                            <div className="company-logo">
                                <span>M</span>
                            </div>
                            <div className="company-info">
                                <h3 className="company-name">Micropole</h3>
                                <span className="company-group">Groupe Talan</span>
                            </div>
                            <div className="experience-meta">
                                <span className="tag tag-current">Stage</span>
                            </div>
                        </div>

                        <div className="experience-details">
                            <h4 className="experience-title">Data Scientist</h4>
                            <div className="experience-info">
                                <span className="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    Paris
                                </span>
                                <span className="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    Avril 2025 – Octobre 2025
                                </span>
                                <span className="info-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    6 mois
                                </span>
                            </div>
                        </div>

                        <div className="experience-context">
                            <p>
                                Stage au sein de la BU Data Science, orienté marketing client, recommandation et R&D sur une solution de scoring propriétaire.
                            </p>
                        </div>

                        <div className="experience-missions">
                            <h5>Missions principales</h5>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Conception et déploiement d'un pipeline complet de segmentation client sur GCP (Vertex AI, BigQuery)
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Analyse comportementale client (RFM, enrichissement de données)
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Mise en place d'analyses de recommandations produits (Market Basket Analysis)
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Participation à la R&D sur le moteur de scoring no-code <strong>Scoring.AI</strong>
                                </li>
                            </ul>
                        </div>

                        <div className="experience-stack">
                            <div className="stack-tags">
                                <span className="stack-tag">Python</span>
                                <span className="stack-tag">SQL</span>
                                <span className="stack-tag">GCP</span>
                                <span className="stack-tag">Vertex AI</span>
                                <span className="stack-tag">BigQuery</span>
                                <span className="stack-tag">MLflow</span>
                                <span className="stack-tag">Git</span>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Key Highlights */}
                <div className="parcours-highlights animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="subsection-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Points Clés
                    </h2>

                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <span className="highlight-number">Master</span>
                            <span className="highlight-label">Statistique Appliquée</span>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-number">5</span>
                            <span className="highlight-label">Certifications Pro</span>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-number">6+</span>
                            <span className="highlight-label">Projets ML</span>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-number">4+</span>
                            <span className="highlight-label">Déployés en Production</span>
                        </div>
                    </div>
                </div>

                {/* Languages & Interests */}
                <div className="parcours-skills animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="skills-row">
                        <div className="skills-section">
                            <h3>Langages de programmation</h3>
                            <div className="tags-container">
                                <span className="tag tag-lang">Python</span>
                                <span className="tag tag-lang">R</span>
                                <span className="tag tag-lang">SAS</span>
                                <span className="tag tag-lang">SQL</span>
                            </div>
                        </div>

                        <div className="skills-section">
                            <h3>Centres d'intérêt professionnels</h3>
                            <div className="tags-container">
                                <span className="tag">Scoring</span>
                                <span className="tag">Segmentation Client</span>
                                <span className="tag">Recommandation</span>
                                <span className="tag">NLP</span>
                                <span className="tag">MLOps</span>
                                <span className="tag">Cloud (GCP)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles Section */}
                <div className="parcours-articles animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="subsection-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        Publications
                    </h2>
                    <p className="articles-text">
                        Je partage régulièrement mes réflexions et tutoriels sur Medium.
                    </p>
                    <a href="https://medium.com/@sallsouleymane66" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        Voir mes articles sur Medium
                    </a>
                </div>

                {/* CTA */}
                <div className="parcours-cta animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <p>Intéressé par mon profil ?</p>
                    <div className="cta-buttons">
                        <Link to="/projets" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            Voir mes projets
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Me contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Parcours
