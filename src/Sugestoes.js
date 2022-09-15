import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoesArr = [
        {
            "userImg": "assets/img/bad.vibes.memes.svg",
            "user": "bad.vibes.memes",
            "razao": "Segue você"
        },
        {
            "userImg": "assets/img/chibirdart.svg",
            "user": "chibirdarts",
            "razao": "Segue você"
        },
        {
            "userImg": "assets/img/razoesparaacreditar.svg",
            "user": "razoesparaacreditar",
            "razao": "Novo no Instagram"
        },
        {
            "userImg": "assets/img/adorable_animals.svg",
            "user": "adorable_animals",
            "razao": "Segue você"
        },
        {
            "userImg": "assets/img/smallcutecats.svg",
            "user": "smallcutecats",
            "razao": "Segue você"
        },
    ]

    return (
    <div class="sugestoes">
    
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>

        {sugestoesArr.map(item => <Sugestao userImg={item.userImg} user={item.user} razao={item.razao}/>)}

  </div>)

}