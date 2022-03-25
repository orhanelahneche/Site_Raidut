import logo from './logo.svg';
import './App.css';
import Bar_menu from './stories/Bar_menu'
import Eventsection from './stories/Eventsection'
import Accueil from './stories/Accueil'
import Papier_dechire from './stories/Papier_dechire'

function App() {
  return (
    <div className="Site">
    <Papier_dechire />
    <Bar_menu />
    <Accueil />
    <Eventsection />
    </div>
  );
}
export default App;
