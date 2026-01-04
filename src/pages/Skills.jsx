import './Skills.css'

const skillCategories = [
    {
        title: 'Data & Statistiques',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
        ),
        skills: ['Statistiques appliquées', 'Scoring', 'Régression', 'Classification', 'Tests statistiques']
    },
    {
        title: 'Machine Learning',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                <circle cx="7.5" cy="14.5" r="1.5"></circle>
                <circle cx="16.5" cy="14.5" r="1.5"></circle>
            </svg>
        ),
        skills: ['Segmentation client', ' Systemes de recommandation ', 'NLP', 'Feature engineering', 'Évaluation de modèles']
    },
    {
        title: 'Cloud & Data Engineering',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
            </svg>
        ),
        skills: ['GCP', 'BigQuery', 'Vertex AI', 'Pipelines data', 'SQL avancé']
    },
    {
        title: 'MLOps & Outils',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        skills: ['Git', 'CI/CD', 'MLflow', 'Docker', 'FastAPI']
    }
]

function Skills() {
    return (
        <section className="skills section">
            <div className="container">
                <h1 className="section-title">Compétences</h1>
                <p className="section-subtitle">
                    Stack technique et domaines d'expertise
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="skill-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-icon">
                                {category.icon}
                            </div>
                            <h3 className="skill-category">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="tech-logos animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h3>Technologies principales</h3>
                    <div className="logos-grid">
                        <div className="tech-item">
                            <div className="tech-icon python">Py</div>
                            <span>Python</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon sql">SQL</div>
                            <span>SQL</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon gcp">GCP</div>
                            <span>Google Cloud</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon sklearn">SK</div>
                            <span>scikit-learn</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon docker">D</div>
                            <span>Docker</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon git">Git</div>
                            <span>Git</span>
                        </div>
                    </div>
                </div>

                <div className="certifications animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h3>Certifications</h3>
                    <div className="certifications-grid">
                        <div className="certification-item">
                            <div className="certification-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6"></circle>
                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                            </div>
                            <span>Python for Data Science</span>
                        </div>
                        <div className="certification-item">
                            <div className="certification-icon sas">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6"></circle>
                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                            </div>
                            <span>SAS Certified Statistical Business Analyst</span>
                        </div>
                        <div className="certification-item">
                            <div className="certification-icon sas">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6"></circle>
                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                            </div>
                            <span>SAS Base Programming</span>
                        </div>
                        <div className="certification-item">
                            <div className="certification-icon dataiku">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6"></circle>
                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                            </div>
                            <span>Dataiku Core Designer</span>
                        </div>
                        <div className="certification-item">
                            <div className="certification-icon dataiku">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6"></circle>
                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                            </div>
                            <span>Dataiku ML Practitioner</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
