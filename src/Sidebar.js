import Usuario from './Usuario';
import Sugestoes from './Sugestoes';
import Links from './Links';
import Copyright from './Copyright';

export default function Sidebar(){
  return(
    <div class='sidebar'>
      <Usuario />
      <Sugestoes />
      <Links />
      <Copyright />
    </div>
  );
}