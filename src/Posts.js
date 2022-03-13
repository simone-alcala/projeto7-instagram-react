const posts = [
  {
    src_usuario: "assets/img/meowed.svg",
    alt_usuario: "meowed",
    nome_usuario: "meowed",
    src_post: "assets/img/gato-telefone.svg",
    alt_post: "gato-telefone",
    src_curtidas: "assets/img/respondeai.svg",
    alt_curtidas: "respondeai",
    curtido_por: "respondeai",
    qtd_curtidas: "101.523"
  },
  {
    src_usuario: "assets/img/barked.svg",
    alt_usuario: "barked",
    nome_usuario: "barked",
    src_post: "assets/img/dog.svg",
    alt_post: "dog",
    src_curtidas: "assets/img/adorable_animals.svg",
    alt_curtidas: "adorable_animals",
    curtido_por: "adorable_animals",
    qtd_curtidas: "99.159"
  }
];

export default function Posts(){
  return(
    <div class="posts">
      {
        posts.map(({src_usuario,alt_usuario,nome_usuario,src_post,alt_post,
                    src_curtidas,alt_curtidas,curtido_por,qtd_curtidas}) => {
          return (
            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={src_usuario} alt={alt_usuario}/>
                  {nome_usuario}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={src_post} alt={alt_post}/>
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={src_curtidas} alt={alt_curtidas}/>
                  <div class="texto">
                    Curtido por <strong>{curtido_por}</strong> e <strong>outras {qtd_curtidas} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}