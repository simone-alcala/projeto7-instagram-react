const icons = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

export default function Fundomobile(){
  return(
    <div class="fundo-mobile">
      {icons.map((name) => (
        <ion-icon name={name}></ion-icon>
      ))}
    </div>
  );
}