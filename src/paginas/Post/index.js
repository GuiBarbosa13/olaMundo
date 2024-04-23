import './Post.css';
import { useParams } from "react-router-dom";
import PostModelo from "../../componentes/PostModelo";
import posts from "../../json/posts.json";
import Markdown from "react-markdown";

export default function Post(){
    const parametros = useParams();
    const post = posts.find((post)=>{
        return post.id === Number(parametros.id);
    })

    console.log(post);
    

    return (
        <PostModelo titulo={post.titulo} fotoCapa={`/posts/${post.id}/capa.png`}>
            <div className="post-markdown-container">
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>             
        </PostModelo>
    )
}

    // const postagem = posts.map(post=>post)

    // const titulo = postagem[parametros.id-1].titulo;
    // const foto = postagem[parametros.id-1].id;
    // const texto = postagem[parametros.id-1].texto;  