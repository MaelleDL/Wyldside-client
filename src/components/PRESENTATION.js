import React from "react";
import "./Who_We_Are.css";
import Remi from "../Img/Team/Remi.png";
import Laura from "../Img/Team/Laura.png";

const WhoWeAre = () => {
  return (
    <div id="presC">
      <div id="club" className="club">
        <h2 className="title club-title">Le Club</h2>
        <div className="prescouple">
          <div className="text">
            <div className="card  WAW card-1">
              <p>
                Wyldside, créé en 2021, est un club associatif à destinée
                d’entreprise. Le club est spécialisé dans les domaines des
                Sports acrobatiques, des arts circassiens aériens et du
                Bien-Etre. Ainsi il souhaite allier Performance, Art du
                Mouvement et Entretien du Soi.
              </p>
            </div>
            <div className="card WAW card-2">
              <p>
                Wyldside vous invite à laisser s’exprimer votre Nature, votre
                Wild* : - Au travers de la Beauté des Arts aériens tel que la
                Pôle dance, les tissus ou encore le cerceau. - Ou de la
                Combativité dans nos sports acrobatiques : gymnastique
                acrobatique et cheerleading ! Ensemble nous visons le Top pour
                ces athlètes, afin d’atteindre les plus hauts sommets. - «
                Relaxation » et « Lâcher Prise » seront les maîtres mots de
                notre spécialisation Bien-être. Yoga, Pilates et Soins
                (énergétiques), qui vous permettrons de profiter d’un moment de
                calme et de reconnexion avec vous-même.
              </p>
            </div>
            <div className="card WAW card-3">
              <p>
                Dans notre structure, vous rencontrerez des athlètes et des
                coachs unis par la même passion du développement personnel, des
                arts du mouvements et de l’envie de partager le meilleur de soi
                au monde.
              </p>
            </div>
            <div className="card WAW card-4">
              <p>
                D’ici quelques années, après avoir installé une équipe de
                professionnels, Wyldside tendra à proposer des offres qui
                permettront (nous y croyons !) de basculer d’athlète à
                professionnel du mouvement, de travailler le Soi intérieur et
                Extérieur, mais aussi et surtout de montrer que le domaine
                sportif n’est pas qu’un simple passe-temps, mais bel et bien une
                école de vie, en devenant une structure de formation reconnue
                par ses pairs et sollicitée pour son professionnalisme, son
                expertise et ses résultats.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h2 className="title team-title">L'équipe</h2>
        <div className="team-contenu">
          <div className="Remi members card">
            <h3 className="subtitle">Rémi Banchereau</h3>
            <div className="member-pres">
              <img src={Remi} alt="Coach Rémi" className="includeimg" />
              <div className="member-text">
                <p>
                  Fan des sports acrobatiques depuis ses 16ans, Il s’est ainsi
                  affirmé comme Gymnaste acrobate, danseur autodidacte en duo,
                  cheerleader (champion de France), coach (bénévole) et membre
                  de comité d’administration de ses anciens clubs ou du bureau.
                  Aujourd’hui fort de sa formation STAPS et de ses diplômes
                  fédéraux qu’il a pu entreprendre dans différents clubs, villes
                  et conditions ; il tient à vous proposer aujourd’hui, des
                  cours de qualité au sein de sa structure avec son associée
                  Laura, dans sa passion entre Sport et Spectacle mais aussi
                  dans le Bien-être !
                </p>
                <p>
                  « Un des grands plaisirs dans la vie est de faire ce que les
                  gens vous ont dit que vous ne pouviez pas faire »
                </p>
                <p> Walter Bagehot</p>
              </div>
            </div>
          </div>
          <div className="Laura members card">
            <h3 className="subtitle">Laura Bailliache</h3>
            <div className="member-pres">
              <img src={Laura} alt="Coach Laura" className="includeimg" />
              <div className="member-text">
                <p>
                  Première associée de la structure, Laura est actuellement en
                  formation (STAPS, et interne). Elle a commencée son parcours
                  sportif dans le Cheerleading en tant qu’athlète en 2018 dans
                  le Club de l’ANC Royalty (championne de France 2019) et son
                  voyage au Pérou de 10 mois lui a permis d’acquérir plus
                  d’expérience et a fait naitre ses premières idées
                  d’entreprises autour de ce sport. Laura est également issue du
                  monde du spectacle avec ses 10ans de chants et galas ; et vous
                  transmettra son énergie dans son nouveau domaine, tout en vous
                  poussant au meilleur de vous-même.
                </p>
                <p>« Quand on veut, on peut, quand on peut , on doit. »</p>
                <p> Napoléon Bonaparte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;
