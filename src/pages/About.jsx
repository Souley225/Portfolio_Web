import './About.css'

function About() {
    return (
        <section className="about section">
            <div className="container">
                <h1 className="section-title">À Propos</h1>
                <p className="section-subtitle">
                    Mon parcours et ma vision de la Data Science
                </p>

                <div className="about-content">
                    <div className="about-image animate-fade-in-up">
                        <img src="/headshot.jpg" alt="Souleymane Sall" />
                        <div className="about-image-decoration"></div>
                    </div>

                    <div className="about-text animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="about-intro">
                            <h2>Souleymane Sall</h2>
                            <p className="about-tagline">Data Scientist orienté impact business</p>
                        </div>

                        <div className="about-story">
                            <p>
                                Parcours académique en <strong>statistique appliquée</strong> et <strong>économie</strong>,
                                avec un intérêt fort pour la data appliquée à des <strong>problématiques business concrètes</strong>.
                            </p>
                            <p>
                                Goût pour les projets <strong>end-to-end</strong>, de la donnée brute jusqu'au modèle exploitable.
                                Mon approche combine rigueur statistique et vision orientée produit,
                                avec une attention particulière aux bonnes pratiques MLOps.
                            </p>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">Master</span>
                                <span className="highlight-label">Statistique Appliquée</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">6 mois</span>
                                <span className="highlight-label">Expérience ESN</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">3+</span>
                                <span className="highlight-label">Projets ML</span>
                            </div>
                        </div>

                        <div className="about-interests">
                            <h3>Centres d'intérêt professionnels</h3>
                            <div className="interests-tags">
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
            </div>
        </section>
    )
}

export default About
