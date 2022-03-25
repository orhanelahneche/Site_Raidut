import logo from '../logo.svg';
import './Accueil.css';

function Accueil (){
  return (
    <header className="App-header">
      <iframe className="teaser" width="50%" height="500" src="https://www.youtube.com/embed/L1XfqIHGiX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </header>
)
}

export default Accueil
