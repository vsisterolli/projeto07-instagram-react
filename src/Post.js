import React from 'react';

export default function Post(props) {
    
    const [curtidas, setCurtidas] = React.useState(props.curtidas);
    const [curtido, setCurtido] = React.useState(false);
    
    const [classeCurtir, setClasse] = React.useState("");
    const [iconeCurtir, setIconeCurtir] = React.useState("heart-outline");

    const [iconeSalvo, setIconeSalvo] = React.useState("bookmark-outline");
    const [classeSalvo, setClasseSalvo] = React.useState("");

    function toggleCurtidas(foiDaImagem) {

        console.log(foiDaImagem);
        if(foiDaImagem && curtido)
            return;
        
        let aux = String(curtidas);
        aux = aux.replaceAll('.', '')

        aux = Number(aux);
        aux += (curtido ? -1 : 1);

        setClasse(curtido ? "" : "curtido");
        setIconeCurtir(curtido ? "heart-outline" : "heart");

        setCurtido(!curtido);
        setCurtidas(aux.toLocaleString('pt-BR'));
        
    }

    function toggleSalvo() {
        if(iconeSalvo === "bookmark-outline") {
            setIconeSalvo("bookmark");
            setClasseSalvo("salvo");
        }
        else {
            setIconeSalvo("bookmark-outline");
            setClasseSalvo("");
        }
    }

    return(
    <div class="post">
        <div class="topo">
            <div class="usuario">
                <img alt="texto" src={props.userImg} />
                {props.user};
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img alt="texto" src={props.postImg} onClick={() => toggleCurtidas(true)}/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon class={classeCurtir} name={iconeCurtir} onClick={() => toggleCurtidas(false)}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name={iconeSalvo} class={classeSalvo} onClick={toggleSalvo}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img alt="texto" src="assets/img/respondeai.svg"/>
                <div class="texto">
                    Curtido por <strong>{props.destaque}</strong> e <strong>outras {curtidas} pessoas</strong>
                </div>
            </div>
            
        </div>
    </div>
    )
}