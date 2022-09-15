import { useReducer } from "react";

export default function Post(props) {
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
            <img alt="texto" src={props.postImg} />
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
                <img alt="texto" src="assets/img/respondeai.svg" />
                <div class="texto">
                    Curtido por <strong>{props.destaque}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                </div>
            </div>
            
        </div>
    </div>
    )
}