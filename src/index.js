
import ReactDOM from 'react-dom';
import Corpo from './Corpo';
import Header from './Header';
import Fundomobile from './Fundomobile';

function App(){
  return(
    <div>
      <Header />
      <Corpo />
      <Fundomobile />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));