import logo from './logo.svg';
import './App.css';
import Bar_menu from './stories/Bar_menu'
import Eventsection from './stories/Eventsection'
import Accueil from './stories/Accueil'
import Papier_dechire from './stories/Papier_dechire'
import Associationsection from './stories/Associationsection'
import Contactsection from './stories/Contactsection'
import FAQsection from './stories/FAQsection'
import Partenairessection from './stories/Partenairessection'

function App() {
  return (
    <div className="Site">
      <Papier_dechire />
      <Bar_menu />
      <Accueil />
      <Eventsection />
      <Associationsection />
      <FAQsection />
      <Partenairessection />
      <Contactsection />
    </div>
  );
}
export default App;
