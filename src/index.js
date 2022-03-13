
import ReactDOM     from 'react-dom';
import Nav          from './Nav';

//MAIN
import Stories      from './Stories';
import Posts        from './Posts';

//SIDEBAR
import Usuario      from './Usuario';
import Sugestoes    from './Sugestoes';
import Links        from './Links';
import Copyright    from './Copyright';

import Fundomobile  from './Fundomobile';

function App(){
  return(
    <div>
      <div class="navbar">
        <Nav />
      </div>
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />      
        </div>
        <div class='sidebar'>
          <Usuario />
          <Sugestoes />
          <Links />
          <Copyright />
        </div>
    </div>
      <Fundomobile />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));