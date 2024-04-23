import './Post.css';
import { useParams } from "react-router-dom";
import PostModelo from "../../componentes/PostModelo";
import posts from "../../json/posts.json";
import Markdown from "react-markdown";
import NaoEncontrada from '../NaoEncontrada';
import Banner from '../../componentes/Banner';
import PostCard from "../../componentes/PostCard";
import styles from "./Post.module.css"

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });
    
    if (!post) {
        return <NaoEncontrada />
    }

    const postFiltrado = posts.filter(post => post.id !== Number(parametros.id)).sort((a,b)=>b.id - a.id).slice(0,4);

    return (
        <>
            <Banner/>
            <PostModelo titulo={post.titulo} fotoCapa={`/posts/${post.id}/capa.png`}>
                <div className="post-markdown-container">
                    <Markdown>
                        {post.texto}
                    </Markdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                <div className={styles.postsRecomendados}>
                    {
                        postFiltrado.map((postagem)=>{return <PostCard post={postagem}/>})
                    }
                </div>
                

            </PostModelo>
        </>

    )
}

// const postagem = posts.map(post=>post)

// const titulo = postagem[parametros.id-1].titulo;
// const foto = postagem[parametros.id-1].id;
// const texto = postagem[parametros.id-1].texto;  