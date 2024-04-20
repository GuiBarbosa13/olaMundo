import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({children,to}){
    const localizacao = useLocation();

    return (
        <Link className={localizacao.pathname === to ?`${styles.linkDestacado}`:`${styles.link}`}to={to}>{children}</Link>
    )
}



{/*A tag Link me permite renderizar a página sem recarregar*/}
{/*a tag Link não usa href e sim to*/}