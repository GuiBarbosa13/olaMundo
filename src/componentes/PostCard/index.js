import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import Botao from '../Botao';


export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img src={`/posts/${post.id}/capa.png`} className={styles.capa} alt='Imagem de capa do post' />
                <h1 className={styles.titulo}>
                    {post.titulo}
                </h1>
                <Botao>Ler</Botao>
            </div>
        </Link>

    )
}