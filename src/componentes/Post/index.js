import { Link } from 'react-router-dom';
import styles from './Post.module.css';


export default function Post({post}){
    return(
        <div className={styles.post}>
            <img src={`/posts/${post.id}/capa.png`} className={styles.capa} alt='Imagem de capa do post'/>
            <h1 className={styles.titulo}>
                {post.titulo}
            </h1>
            <Link className={styles.botaoLer}>Ler</Link>
        </div>
    )
}