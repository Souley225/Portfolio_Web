import './Articles.css'

const articles = [
    {
        id: 1,
        title: 'Le Scoring en Contexte Réel : Au-delà de la Théorie',
        summary: 'Retour d\'expérience sur l\'implémentation de modèles de scoring en entreprise. Les écarts entre les cours et la réalité terrain.',
        date: '2025',
        readTime: '8 min',
        tags: ['Scoring', 'MLOps'],
        url: 'https://medium.com/@sallsouleymane66/de-la-donnée-brute-au-scoring-prédictif-le-guide-complet-pour-data-scientists-9ab1623eff69'
    },
    {
        id: 2,
        title: 'Industrialiser un Modèle ML : Les Bonnes Pratiques',
        summary: 'Du notebook au modèle en production : pipelines, monitoring, et gestion des dérives. Un guide pratique basé sur mon expérience.',
        date: '2025',
        readTime: '10 min',
        tags: ['MLOps', 'Production'],
        url: 'https://medium.com/@sallsouleymane66/comment-construire-un-pipeline-mlops-de-bout-en-bout-39ffb9142969'
    },
    {
        id: 3,
        title: 'Segmentation Client : RFM et Au-delà',
        summary: 'Comment structurer une segmentation client pertinente pour le marketing. De l\'analyse RFM aux approches plus avancées.',
        date: '2025',
        readTime: '7 min',
        tags: ['Segmentation', 'Marketing'],
        url: 'https://medium.com/@sallsouleymane66'
    }
]

function Articles() {
    return (
        <section className="articles section">
            <div className="container">
                <h1 className="section-title">Articles & Découvertes</h1>
                <p className="section-subtitle">
                    Réflexions techniques et retours d'expérience sur le Machine Learning en entreprise
                </p>

                <div className="articles-grid">
                    {articles.map((article, index) => (
                        <article
                            key={article.id}
                            className="article-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="article-meta">
                                <span className="article-date">{article.date}</span>
                                <span className="article-dot">•</span>
                                <span className="article-read-time">{article.readTime}</span>
                            </div>

                            <h3 className="article-title">{article.title}</h3>
                            <p className="article-summary">{article.summary}</p>

                            <div className="article-tags">
                                {article.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>

                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="article-link"
                            >
                                Lire sur Medium
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>

                <div className="articles-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <a
                        href="https://medium.com/@sallsouleymane66"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        Voir tous les articles sur Medium
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Articles
