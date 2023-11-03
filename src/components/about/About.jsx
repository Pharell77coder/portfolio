import React from 'react';
import './about.css';
import Image from "../../assets/photo-1.JPG";


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">À propos de moi</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about img" />
        <div className="about__data grid">
          <div className="about__info">
          <p className="about__description">
            Je suis Titi Pharell, étudiant à Issy les moulineaux, France. 
            Je suis un passionné e  programmation informatique et 
            je code depuis 2019.
            J'ai appris python le Sql le html le css et le Javascript, 
            lors de mon cursus scolaire et le Java et le React en autodidacte.</p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__names">Python</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
              
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__names">HTML CSS Javascript</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage web"></span>
              </div>
              
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__names">Java</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="about__data grid">
          <div className="about__info">
          <p className="about__description">
            J'ai de l'experience professionnels dans la restauration en temps équipier polyvalent. Dans ce métier il faut Faire preuve d'une amabilité à toute épreuve : être souriant, accueillant.
Faire preuve de dynamisme et de réactivité : une bonne vitesse d'action est recommandée.
Montrer une grande adaptabilité : les équipiers sont souvent amenés à occuper des postes différents d'une journée à l'autre.
</p>
          </div>
          <div className="about__description">
            <p>Avoir une excellente présentation, un sens du contact (avec la clientèle).
            Avoir une forte motivation, une bonne résistance physique (travail en station debout toute la journée, être rapide et réactif en période d'affluence).
            Savoir s'organiser, se montrer disponible.
            Avoir une bonne faculté de concentration.</p>
            <a href="https://drive.google.com/drive/folders/1riNt38K3F1Ufj-ov-od3xBmWPYXz2PUE?usp=share_link" className="btn">Télécharge mon CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;