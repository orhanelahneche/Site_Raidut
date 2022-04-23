import React from 'react'
import './FAQsection.css'
import Accordion from './Accordion.jsx'


function FAQsection () {
  return(
    <div className="FAQ-section">
      <div className="FAQ-section-title">
        <hr></hr>
        <h1>FAQ</h1>
        <hr></hr>
      </div>
      <div className="FAQ-section-content">
        <Accordion question={"Quelles sont les conditions pour pouvoir participer au raid ?"} response={<div><p>Les parcours compétition de 40km et sportif chronométré sont ouverts aux participants de 16 ans ou plus. En dessous de cet âge, les participants devront être accompagnés d’une personne majeure.</p> <p>Pour chaque parcours chronométré un certificat médical datant d’au moins un an est nécessaire (la pastille BDS ou une licence sportive en compétition font office de justificatif). Le certificat médical devra être déposé lors de la remise des dossards le jour-J.</p><p>Le parcours compétition de 40 km se fait OBLIGATOIREMENT en vélo (VTT)
Le parcours sportif propose deux variantes : <br/> <ul><li>En vélo, auquel cas les participants ne sont pas chronométrés</li><li>A pied, auquel cas les participants sont chronométrés</li></ul><br/>Le parcours loisir peut se faire à pied, ou en vélo. Dans les deux cas, ce parcours n’est pas chronométré.</p></div>} />
        <Accordion question={"A quelle heure se font les différents départs du raid ?"} response={<ul><li>Parcours Loisirs : Départ entre 13h30 et 15h30</li><li>Parcours Intermédiaire : Départ entre 11h30 et 13h30</li><li>Parcours Compétition : Départ entre 9h et 10h30</li></ul>} />
        <Accordion question={"Est-il possible de manger sur place ?"} response={<p>Oui, il y aura un stand de restauration ainsi qu’une buvette sur le village départ, ouvert toute la journée. L’accès au village est totalement gratuit.</p>} />
        <Accordion question={"Quels sont les horaires de l’événement ?"} response={<p>Le village ouvre ses portes dès 8h30 et jusqu’à 20h. L’entrée est gratuite et de nombreuses activités animeront le village toute la journée.</p>} />
        <Accordion question={"Quelles sont les différentes épreuves de chaque parcours ?"} response={<p>Les épreuves sont variées et s’effectuent à pieds ou à vélo ! On peut compter des épreuves de trail, de course d’orientation, et de tir, mais aussi des énigmes, et de nombreuses activités plus ludiques sur le parcours loisir. Une description détaillée de chaque parcours sera bientôt disponible dans les Roadbooks correspondants.</p>} />
        <Accordion question={"Est-ce que je suis obligé de faire toutes les épreuves ?"} response={<p>Non ! Le R4M est un raid ouvert à tous, il n’est donc pas obligatoire de participer à toutes les épreuves. En revanche, l'abandon d’une épreuve sur les parcours chronométrés entraînera une pénalité non négligeable.</p>} />
        <Accordion question={"Pourquoi la distance d’un parcours n’est pas fixe ?"} response={<p>Comme expliqué plus haut, les épreuves sont optionnelles. La plus petite distance indiquée est la distance du parcours sans les épreuves. Au contraire, la plus grande distance correspond à celle du parcours si votre équipe décide de participer à toutes les épreuves !</p>} />
        <Accordion question={"Est-ce que je dois prévoir de la nourriture pour mon parcours ?"} response={<p>Au moins un ravitaillement sera présent sur chaque parcours ! Ils contiendront tout ce qu’il faut pour reprendre des forces et repartir plein d’énergie ! Il est néanmoins conseillé aux participants du parcours compétition d’emporter des barres céréales en cas de fringale.</p>} />
        <Accordion question={"Quel est le matériel dont j’ai besoin pour mon parcours ?"} response={<p>Une liste exhaustive du matériel nécessaire pour chaque épreuve est disponible dans le Roadbook de chacun des parcours ! Il est tout de même important de noter qu’une gourde sera nécessaire pour se ravitailler en eau au niveau des ravitaillements disposés tout au long du parcours. Un casque sera aussi obligatoire si votre équipe décide d’effectuer le parcours à VTT.</p>} />
        <Accordion question={"Je suis intéressé(e) pour être bénévole, quelles sont les démarches à effectuer ?"} response={<p>Déjà nous te remercions pour ta motivation, pour cela tu peux nous envoyer un mail à l’adresse raidut@assos.utc.fr nous te recontacterons pour te donner les informations complémentaires.</p>} />
        <Accordion question={"Est-ce qu’un classement sera effectué sur les différents parcours ?"} response={<p>Les parcours classés et chronométrés seront : le parcours compétition et le parcours sportif (à pied). La remise des prix aura lieu dans l'après-midi lorsque tous les participants seront arrivés.</p>} />
        <Accordion question={"Peut-on venir sur le village associatif même si nous ne participons pas au Raid ?"} response={"âge, inscription, certif medic, vélo obligatoire"} />
        <Accordion question={"Combien doit-on être par équipe ?"} response={<ul><li>Parcours loisir : 2 à 6 par équipe</li><li>Parcours sportif à vélo : 2 à 6 par équipe</li><li>Parcours sportif à pied : 2 par équipe</li><li>Parcours compétition : 2 par équipe</li></ul>} />
        <Accordion question={"Où puis-je m’inscrire pour participer au Raid et/ou à la soirée ?"} response={<p>Pour participer au Raid, rien de plus simple ! Le lien de la billetterie est disponible sur le site. Assure toi de bien lire le règlement et de choisir le bon parcours et le bon tarif (Cotisant/Non cotisant).</p>} />
        <Accordion question={"Le Raid est-il réellement caritatif ?"} response={<p>Bien sûr ! Participer au R4M c’est faire une bonne action pour la préservation de la forêt (sans forêt, pas de raid). Nous sommes en partenariat avec Cœur de Forêt, une association qui lutte pour cette cause et à laquelle nous reversons une partie des bénéfices de l’événement sous forme de don !</p>} />
      </div>
    </div>
  )
}

export default FAQsection
