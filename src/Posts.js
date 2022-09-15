import Post from "./Post";

export default function Posts() {

    const postsArr = [
        {
            "curtidas": "101.526",
            "destaque": "respondeai",
            "user": "meowed",
            "userImg": "assets/img/meowed.svg",
            "postImg": "assets/img/gato-telefone.svg"
        },
        {
            "curtidas": "99.159",
            "destaque": "adorable_animals",
            "user": "barked",
            "userImg": "assets/img/barked.svg",
            "postImg": "assets/img/dog.svg"
        }
    ]

    return(
        <div class="posts">
            {postsArr.map(item => <Post curtidas={item.curtidas} destaque={item.destaque} user={item.user} userImg={item.userImg} postImg={item.postImg}/>)}
        </div>
    )
}