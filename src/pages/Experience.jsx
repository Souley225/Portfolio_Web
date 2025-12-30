import './Experience.css'

function Experience() {
    return (
        <section className="experience section">
            <div className="container">
                <h1 className="section-title">Expérience Professionnelle</h1>
                <p className="section-subtitle">
                    Mon parcours en Data Science et Machine Learning
                </p>

                <div className="timeline">
                    <article className="timeline-item animate-fade-in-up">
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="timeline-content">
                            <div className="experience-card">
                                <div className="experience-header">
                                    <div className="company-logo">
                                        <span>M</span>
                                    </div>
                                    <div className="company-info">
                                        <h3 className="company-name">Micropole</h3>
                                        <span className="company-group">Groupe Talan</span>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="tag">Stage</span>
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
                                    <h5>Contexte</h5>
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
                                            Participation à la R&D sur le moteur de scoring no-code <span className="highlight">Scoring.AI</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="experience-stack">
                                    <h5>Stack technique</h5>
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
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Experience
