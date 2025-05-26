import React from 'react';

function Detail(props) {
  return (
    <div className="detail-container">
      <h2>{props.titre}</h2>
      <p>{props.contenu}</p>
      <a href={props.link}>voir le projet</a>
    </div>
  );
}

export default Detail;