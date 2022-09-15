export default function Sugestao(props) {
    return (
    <div class="sugestao">
        <div class="usuario">
            <img alt="texto" src={props.userImg} />
            <div class="texto">
                <div class="nome">{props.user}</div>
                <div class="razao">{props.razao}</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    )
}