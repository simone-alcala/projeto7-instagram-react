const susgestoes = [
  {
    src: "assets/img/bad.vibes.memes.svg",
    alt: "bad.vibes.memes",
    nome: "bad.vibes.memes",
    razao: "Segue você"
  },
  {
    src: "assets/img/chibirdart.svg",
    alt: "chibirdart",
    nome: "chibirdart",
    razao: "Segue você"
  },
  {
    src: "assets/img/razoesparaacreditar.svg",
    alt: "razoesparaacreditar",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram"
  },
  {
    src: "assets/img/adorable_animals.svg",
    alt: "adorable_animals",
    nome: "adorable_animals",
    razao: "Segue você"
  },
  {
    src: "assets/img/smallcutecats.svg",
    alt: "smallcutecats",
    nome: "smallcutecats",
    razao: "Segue você"
  }
];

export default function Sugestoes(){
  return(
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {susgestoes.map(({src,alt,nome,razao}) => {
        return (
          <Sugestao src={src} alt={alt} nome={nome} razao={razao} />
        );
      })}
    </div>
  );
}

function Sugestao(props){
  const {src,alt,nome,razao} = props;
  return (
    <div>   
      <div class="sugestao">
        <div class="usuario">
          <img src={src} alt={alt}/>
          <div class="texto">
            <div class="nome">{nome}</div>
            <div class="razao">{razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    </div>
  );

}