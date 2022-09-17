import React from 'react';

export default function Usuario() {
    
    const [nome, setNome] = React.useState("Catana");
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

    return(
    <div class="usuario">
        <img alt="texto" src={foto} onClick={() => setFoto(prompt("Qual o link da sua foto?"))}/>
        <div class="texto">
        <strong>catanacomics</strong>
        <span onClick={() => setNome(prompt("Qual seu nome?"))}>
            {nome}
            <ion-icon name="pencil"></ion-icon>
        </span>
        </div>
  </div>
    )
}