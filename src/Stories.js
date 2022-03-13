const stories = [
  {
    src: "assets/img/9gag.svg",
    alt: "9gag",
    usuario: "9gag"
  },
  {
    src: "assets/img/meowed.svg",
    alt: "meowed",
    usuario: "meowed"
  },
  {
    src: "assets/img/barked.svg",
    alt: "barked",
    usuario: "barked"
  },
  {
    src: "assets/img/nathanwpylestrangeplanet.svg",
    alt: "nathanwpylestrangeplanet",
    usuario: "nathanwpylestrangeplanet"
  },
  {
    src: "assets/img/wawawicomics.svg",
    alt: "wawawicomics",
    usuario: "wawawicomics"
  },
  {
    src: "assets/img/respondeai.svg",
    alt: "respondeai",
    usuario: "respondeai"
  },
  {
    src: "assets/img/filomoderna.svg",
    alt: "filomoderna",
    usuario: "filomoderna"
  },
  {
    src: "assets/img/memeriagourmet.svg",
    alt: "memeriagourmet",
    usuario: "memeriagourmet"
  }
];

export default function Stories(){
  return(
    <div class="stories">
      {
        stories.map(({src,alt,usuario})=>(
          <Story src={src} alt={alt} usuario={usuario}/>
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story (props){
  const {src,alt,usuario}=props;
  return(
    <div class="story">
      <div class="imagem">
        <img src={src} alt={alt}/>
      </div>
      <div class="usuario"> {usuario} </div>
    </div>
  );
}