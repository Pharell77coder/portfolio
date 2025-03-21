import React from 'react';
import './veille.css';

const Veille = () => {
  return (
    <section className="Veille container section" id="veille">
      <h2 className="section__title">Veille technologique</h2>

      <div className="veille__container grid">
    <article className="veille__item">
      <h3>Sortie de Python 3.13 (Octobre 2024)</h3>
      <p>Python 3.13, attendu en octobre 2024, améliore la gestion mémoire et optimise l'interpréteur via le projet Faster CPython.</p>
      <a href="https://peps.python.org/pep-0713/" target="_blank" rel="noopener noreferrer">Lire plus</a>
    </article>

    <article className="veille__item">
      <h3>PyScript : Python dans le navigateur (Janvier 2024)</h3>
      <p>PyScript permet d'exécuter du code Python dans un navigateur sans serveur, avec un support accru des frameworks en 2024.</p>
      <a href="https://pyscript.net/" target="_blank" rel="noopener noreferrer">Lire plus</a>
    </article>

    <article className="veille__item">
      <h3>Python et l’intelligence artificielle (Mars 2024)</h3>
      <p>Les bibliothèques comme LangChain et PyTorch 2.2 facilitent l'intégration des modèles d'IA avancés.</p>
      <a href="https://python.langchain.com/en/latest/" target="_blank" rel="noopener noreferrer">Lire plus</a>
    </article>

    <article className="veille__item">
      <h3>FastAPI domine le développement web (Juin 2024)</h3>
      <p>FastAPI continue de surpasser Flask en termes de performance et d'adoption par les grandes entreprises.</p>
      <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">Lire plus</a>
    </article>

    <article className="veille__item">
      <h3>Python et cybersécurité (Mars 2025)</h3>
      <p>Python est utilisé pour la détection des menaces avec Scapy, Pyshark et l'automatisation des tests de sécurité.</p>
      <a href="https://scapy.net/" target="_blank" rel="noopener noreferrer">Lire plus</a>
    </article>
  </div>
</section>
  )
}

export default Veille;