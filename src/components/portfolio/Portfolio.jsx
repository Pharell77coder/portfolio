// Portfolio.jsx
import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Travail récent</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Tous</span>
        <span className="work__item" onClick={() => filterItem("Python")}>Python</span>
        <span className="work__item" onClick={() => filterItem("React")}>React JS</span>
        <span className="work__item" onClick={() => filterItem("Java")}>Java</span>
        <span className="work__item" onClick={() => filterItem("PHP")}>PHP</span>
        <span className="work__item" onClick={() => filterItem("C#")}>C#</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              {/*<a onClick={() => setSelectedItem(elem)} className="work__button">*/}
              <a href={link} target="_blank" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>

      {/*selectedItem && (
        <Detail 
          titre={selectedItem.title}
          contenu={selectedItem.contenu || "Description non disponible"}
          link={selectedItem.link || "Description non disponible"}
        />
      )*/}
    </section>
  )
}

export default Portfolio;